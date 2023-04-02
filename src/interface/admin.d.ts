export interface adminInfo {
  isLoading: boolean;
  error: string;
  data: {
    name: string;
    email: string;
    [key: any]: string;
  };
}
