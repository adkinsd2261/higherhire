import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  // Check if we're in development mode
  const isDevelopment = import.meta.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';
  
  // Mock auth for development
  if (isDevelopment) {
    return {
      user: {
        id: 'dev-user',
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        profileImageUrl: null,
        stripeCustomerId: null,
        stripeSubscriptionId: null,
        subscriptionStatus: 'free',
        reportsUsed: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      isLoading: false,
      isAuthenticated: true,
    };
  }

  // Production auth
  const { data: user, isLoading } = useQuery({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}
