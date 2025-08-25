import axios, { AxiosResponse } from "axios";

const hostname = "https://gateway.24.144.77.108.nip.io";
const streamingEndpoint = `${hostname}/stream`;

// interface Stream {
//   title: string;
//   description: string;
//   tags: string[];
//   category: string;
// }

function createStream(metadata: {
  title: string;
  description: string;
  tags: string[];
  category: string;
}): Promise<{ streamKey: string; srtUrl: string }> {
  return axios
    .post<{ streamKey: string; srtUrl: string }>(
      `${streamingEndpoint}/createStream`,
      metadata
    )
    .then(
      (response: AxiosResponse<{ streamKey: string; srtUrl: string }>) =>
        response.data
    );
}

export default createStream;
