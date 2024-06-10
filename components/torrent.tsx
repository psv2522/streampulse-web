"use client";

import WebTorrent from "@/lib/webtorrent.min.js";

export default function Torrent() {
  const torrentId =
    "magnet:?xt=urn:btih:c9e15763f722f23e98a29decdfae341b98d53056&dn=Cosmos+Laundromat&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fcosmos-laundromat.torrent";

  const client = new WebTorrent();

    var file;
  client.add(torrentId, function (torrent: { files: any[] }) {
    file = torrent.files.find(function (file: { name: string }) {
      return file.name.endsWith(".mp4");
    });
  });
    if (file) {
        console.log(file.name)
    }
  return (
    <div>
      <video
        className="mb-4 w-full max-w-lg border-2 border-gray-300"
        controls
        autoPlay
        loop
        preload="metadata"
      >
        <source src={file} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
