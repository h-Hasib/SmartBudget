// declare navigation types here
export type RootStackParamList = {
  AuthStack: undefined;
  SplashScreen: undefined;
  GetStartedScreen: undefined;
  EmailSetupScreen: undefined;
  SendVerificationScreen: { email: string };
  CheckVerificationScreen: { email: string };
  SetPasswordScreen: { email: string };
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  EmailSetupOtpScreen: { email: string };
  ForgotPasswordOtpScreen: { email: string };
  ResetPasswordScreen: { email: string };
  ResetPasswordSuccessScreen: undefined;

  TabNavigation: undefined;
  DashboardScreen: undefined;
  ActionButton: undefined;
  AnalyticDashboardScreen: undefined;
  AllBudgetScreen: undefined;
  GoalScreen: undefined;

  MyProfileDetailsScreen: undefined;
  WelcomeSuccessScreen: undefined;
  BasicInfoScreen: undefined;
  FinancialInfoScreen: undefined;
  WelcomeLoaderScreen: undefined;
};
