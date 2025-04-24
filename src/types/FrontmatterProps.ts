export type FrontmatterProps = {
  company: string;
  image: string;
  positions?: {
    title: string;
    startDate?: string;
    endDate?: string;
  }[];
  more: {
    title: string;
    href: string;
  }[];
  tags: {
    icon: string;
    title: string;
    href?: string;
  }[];
};