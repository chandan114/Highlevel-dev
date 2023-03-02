export interface applicationRequestInterface extends Request {
  platformClient: {
    application: Function;
    configuration: {
      getApplications: Function;
    };
  };
  fdkSession: { extension_id: string };
}
