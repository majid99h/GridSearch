import { Injectable } from "@angular/core";
import { Search } from "../search.model";
@Injectable({
  providedIn: "root"
})
export class TorrentService {
  data: Search[] = [
    {
      id: 1,
      Name: "U-torrent",
      Description:
        "uTorrent is a proprietary adware BitTorrent client owned and developed by BitTorren",
      type: "torrent"
    },
    {
      id: 2,
      Name: "Google",
      Description:
        "Google, LLC is an American multinational technology company that specializes in Internet-related services and products,",
      type: "Search Engine"
    },
    {
      id: 3,
      Name: "Sophos",
      Description: "Hide your Identity",
      type: "vpn"
    },
    {
      id: 4,
      Name: "Nord",
      Description:
        "A virtual private network extends a private network across a public network and enables users to send and receive data across shared or public networks",
      type: "Vpn"
    },
    {
      id: 5,
      Name: "UltraSoft",
      Description: "Hide your Identity",
      type: "vpn"
    },
    {
      id: 6,
      Name: "ExpressVPN",
      Description:
        "ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express ",
      type: "vpn"
    },
    {
      id: 7,
      Name: "IMDB",
      Description:
        "IMDb is an online database of information related to films, television programs, home videos, video games, and streaming content online",
      type: "DataBase"
    },
    {
      id: 8,
      Name: "Sophos",
      Description:
        "Sophos Group plc is a British security software and hardware company.",
      type: "vpn"
    },
    {
      id: 9,
      Name: "Avast",
      Description:
        "Avast Antivirus is a family of cross-platform internet security applications developed by Avast for Microsoft Windows, macOS, Android and iOS",
      type: "AntiVirus"
    }
  ];
}
