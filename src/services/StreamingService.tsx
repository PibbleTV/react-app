import axios, { AxiosResponse } from "axios";

const hostname = "http://local.pibbletv.com/api";
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
