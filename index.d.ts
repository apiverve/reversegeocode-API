declare module '@apiverve/reversegeocode' {
  export interface reversegeocodeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface reversegeocodeResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class reversegeocodeWrapper {
    constructor(options: reversegeocodeOptions);

    execute(callback: (error: any, data: reversegeocodeResponse | null) => void): Promise<reversegeocodeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: reversegeocodeResponse | null) => void): Promise<reversegeocodeResponse>;
    execute(query?: Record<string, any>): Promise<reversegeocodeResponse>;
  }
}
