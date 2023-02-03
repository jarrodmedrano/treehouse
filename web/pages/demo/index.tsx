import {m,page} from "../../deps.ts";
export default page({}, ({attrs: {dev}}) => (
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="window" content="resizable=true,center=true,width=1024,height=768" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/app/main.css" rel="stylesheet"></link>
    <link rel="icon" href="/icon.png" type="image/x-icon" />
    <link rel="manifest" href="/app/main.webmanifest" />
    <link href="https://fonts.googleapis.com/css?family=Work Sans" rel="stylesheet" type="text/css"></link>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mithril/2.0.3/mithril.min.js" integrity="sha512-NJfYo9jBx+EzVI27l/hbSs/6EEkmlG5YAEx0e7WxqBG6yNOwasjYr+xeoTFCfpczQ/dSgAKZAKy5YMTml99srg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/minisearch@6.0.1/dist/umd/index.min.js"></script>
    <title>Treehouse</title>
  </head>
  <body>
    <script src="/app/main.js" type="module"></script>
    {(dev)?<script src="https://deno.land/x/refresh/client.js"></script>:null}
  </body>
</html>
));
