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
    sectionId: string;
  };
}

export interface expressPackage {
  sys: {
    id: string;
  };
  fields: {
    subTitle: string;
    title: string;
    brief: string;
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
    packages: {
      fields: {
        locationDetails: string;
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
        newPrice: number;
      };
    }[];
    locationsSection: {
      sys: {
        id: string;
      };
      fields: {
        title: string;
        workingHours: {
          workingHours: {
            to: string;
            from: string;
          };
        };
        locationImage: {
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
        contactNumber: number;
        locationUrl: string;
        location: { sys: { id: string } };
      };
    }[];
  };
}

export interface categorizedCareExpressLocations {
  label: string;
  id: string;
  locations: {
    sys: any;
    fields: {
      title: string;
      locationDetails?: string;
      workingHours: {
        workingHours: {
          to: string;
          from: string;
        };
      };
      locationImage: {
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
      contactNumber: number;
      locationUrl: string;
      location: {
        sys: {
          id: string;
        };
      };
    };
  }[];
}
