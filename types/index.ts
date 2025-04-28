export interface NavbarLink {
  sys: {
    id: string;
  };
  fields: {
    title?: string;
    link?: string;
  };
}

export interface Category {
  sys: {
    id: string;
  };
  fields: {
    title?: string;
    brief?: string;
    list?: string[];
    image?: {
      fields: {
        title?: string;
        description?: string;
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
  };
}

export interface Doctor {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    job: string;
    image?: {
      fields: {
        title?: string;
        description?: string;
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
  };
}

export interface HealthPackage {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    brief: string;
    package: {
      fields: {
        image: {
          fields: {
            title: string;
            file: {
              url: string;
              details: {
                image: {
                  width: number;
                  height: number;
                };
              };
            };
          };
        };
        title: string;
        price: number;
      };
    }[];
  };
}
