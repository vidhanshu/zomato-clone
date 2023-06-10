export declare namespace NSHome {
  interface ICollection {
    id: string;
    title: string;
    placesCount: number;
    image: string;
  }

  interface IOption {
    id: string;
    title: string;
    image: string;
    desc: string;
    link: string;
  }

  interface IPopular {
    id: string;
    name: string;
    placeCount: number;
  }

  interface IAccordion {
    id: string;
    title: string;
    desc: React.ReactNode;
  }
}
