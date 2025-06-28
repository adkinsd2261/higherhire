import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle, XCircle, Flag, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

interface PendingContentItem {
  id: string;
  textSnippet: string;
  sourceName: string;
  sourceUrl: string | null;
  author: string | null;
  originalPostDate: string | null;
  dateCollected: string;
  tags: string[];
  confidenceScore: string;
  employerName: string;
}

interface ModerationResponse {
  items: PendingContentItem[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export default function ContentModerationDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: moderationData, isLoading } = useQuery({
    queryKey: ['/api/moderation/pending', currentPage],
    queryFn: async () => {
      const response = await fetch(`/api/moderation/pending?page=${currentPage}&limit=20`);
      if (!response.ok) {
        throw new Error('Failed to fetch pending content');
      }
      return response.json() as Promise<ModerationResponse>;
    },
  });

  const moderationMutation = useMutation({
    mutationFn: async ({ action, itemId }: { action: 'approve' | 'reject' | 'flag'; itemId: string }) => {
      const response = await fetch(`/api/moderation/${action}/${itemId}`, { method: 'POST' });
      if (!response.ok) {
        throw new Error(`Failed to ${action} content`);
      }
      return response.json();
    },
    onSuccess: (data, variables) => {
      toast({
        title: "Success",
        description: `Content ${variables.action}d successfully`,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/moderation/pending'] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to moderate content",
        variant: "destructive",
      });
    },
  });

  const handleModeration = (action: 'approve' | 'reject' | 'flag', itemId: string) => {
    moderationMutation.mutate({ action, itemId });
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getConfidenceBadgeColor = (confidence: string) => {
    switch (confidence.toLowerCase()) {
      case 'high': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getSourceBadgeColor = (source: string) => {
    switch (source.toLowerCase()) {
      case 'reddit': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'glassdoor': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'indeed': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'twitter': return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading pending content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Moderation Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Review and moderate user-generated employer content
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="text-sm">
            <AlertCircle className="w-4 h-4 mr-1" />
            {moderationData?.totalItems || 0} Pending
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">{moderationData?.totalItems || 0}</p>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">-</p>
                <p className="text-sm text-muted-foreground">Approved Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold">-</p>
                <p className="text-sm text-muted-foreground">Rejected Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Flag className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-2xl font-bold">-</p>
                <p className="text-sm text-muted-foreground">Flagged Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Items */}
      <div className="space-y-4">
        {moderationData?.items?.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
              <p className="text-muted-foreground">No pending content items to review.</p>
            </CardContent>
          </Card>
        ) : (
          moderationData?.items?.map((item) => (
            <Card key={item.id} className="border border-border hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge className={getSourceBadgeColor(item.sourceName)}>
                        {item.sourceName}
                      </Badge>
                      <Badge className={getConfidenceBadgeColor(item.confidenceScore)}>
                        {item.confidenceScore} Confidence
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {item.employerName}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Author: {item.author || 'Anonymous'}</span>
                      <span>Posted: {formatDate(item.originalPostDate)}</span>
                      <span>Collected: {formatDate(item.dateCollected)}</span>
                    </div>
                  </div>
                  {item.sourceUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Content Text */}
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-foreground leading-relaxed">
                      {item.textSnippet}
                    </p>
                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <Separator />

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleModeration('flag', item.id)}
                      disabled={moderationMutation.isPending}
                    >
                      <Flag className="w-4 h-4 mr-1" />
                      Flag
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleModeration('reject', item.id)}
                      disabled={moderationMutation.isPending}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleModeration('approve', item.id)}
                      disabled={moderationMutation.isPending}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Pagination */}
      {moderationData && moderationData.totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {moderationData.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(moderationData.totalPages, prev + 1))}
            disabled={currentPage === moderationData.totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}