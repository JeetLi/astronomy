export interface sizeProps {
  maxWidth: number;
  heightImg: number;
}
export interface apodProps {
  title: string;
  copyright: string;
  date: string;
  explanation: string;
  url: string;
  hdUrl?: string;
  mediaType: string;
  serviceVersion: string;
  can?: string;
}

export interface apodCustomProps {
  order: number;
  url: string;
  day?: apodProps;
  error?: boolean;
}
