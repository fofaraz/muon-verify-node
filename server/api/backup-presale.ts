import PresaleVerify from "../models/PresaleVerify"
export default defineEventHandler(async(event) => {
    backupRecords.forEach(async record=>{
        await PresaleVerify.create({
            discordUserId:record.discordUserId,
            address:record.address,
        })
    })
    return {success:true};
})

let backupRecords=[{
    "_id": {
        "$oid": "6499ab4d3fe7925c6b457557"
    },
    "discordUserId": "694539098433781850",
    "address": "0xe8fb09228d1373f931007ca7894a08344b80901c",
    "createdAt": {
        "$date": "2023-06-26T15:14:21.876Z"
    },
    "updatedAt": {
        "$date": "2023-06-26T15:14:21.876Z"
    }
},{
    "_id": {
        "$oid": "649ea572ec377c77ad1e4c33"
    },
    "discordUserId": "690248257582006338",
    "address": "0x2fe95ba46d36e6bbc8d3bbc6bf3f18c85c91f3af",
    "createdAt": {
        "$date": "2023-06-30T09:50:42.433Z"
    },
    "updatedAt": {
        "$date": "2023-06-30T09:50:42.433Z"
    }
},{
    "_id": {
        "$oid": "64a005b8ec377c77ad1e4c3c"
    },
    "discordUserId": "226784090689503233",
    "address": "0xc81914a020ae636d8c63c7dffd1dfe67910b1121",
    "createdAt": {
        "$date": "2023-07-01T10:53:44.016Z"
    },
    "updatedAt": {
        "$date": "2023-07-01T10:53:44.016Z"
    }
},{
    "_id": {
        "$oid": "64a006d2ec377c77ad1e4c43"
    },
    "discordUserId": "830642310676611082",
    "address": "0x663211ac27b398ae6174d680d8a98d645ed4311d",
    "createdAt": {
        "$date": "2023-07-01T10:58:26.736Z"
    },
    "updatedAt": {
        "$date": "2023-07-01T10:58:26.736Z"
    }
},{
    "_id": {
        "$oid": "64a032a4ec377c77ad1e4c4a"
    },
    "discordUserId": "233414556012118016",
    "address": "0x8fa33056d9067ba93bc89a3366aad64952743028",
    "createdAt": {
        "$date": "2023-07-01T14:05:24.009Z"
    },
    "updatedAt": {
        "$date": "2023-07-01T14:05:24.009Z"
    }
},{
    "_id": {
        "$oid": "64a2cf7fec377c77ad1e4c55"
    },
    "discordUserId": "749320217389301831",
    "address": "0x7267db34b6072080923f92e626c2fc5da91ff25b",
    "createdAt": {
        "$date": "2023-07-03T13:39:11.902Z"
    },
    "updatedAt": {
        "$date": "2023-07-03T13:39:11.902Z"
    }
},{
    "_id": {
        "$oid": "64a58d7cec377c77ad1e4c5e"
    },
    "discordUserId": "847182760568422491",
    "address": "0x1d0a10e57bf6e0717623c5a36f555e4a5e5c021c",
    "createdAt": {
        "$date": "2023-07-05T15:34:20.582Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:34:20.582Z"
    }
},{
    "_id": {
        "$oid": "64a58d7fec377c77ad1e4c63"
    },
    "discordUserId": "1021786294717796432",
    "address": "0x66f91039549108e595a3936ac634f57f7558ddd9",
    "createdAt": {
        "$date": "2023-07-05T15:34:23.800Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:34:23.800Z"
    }
},{
    "_id": {
        "$oid": "64a58f8aec377c77ad1e4c70"
    },
    "discordUserId": "414683922316918795",
    "address": "0x75fe3943a6c8866e1c41e1f35c74a9fb7a77b835",
    "createdAt": {
        "$date": "2023-07-05T15:43:06.600Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:43:06.600Z"
    }
},{
    "_id": {
        "$oid": "64a58f90ec377c77ad1e4c75"
    },
    "discordUserId": "687260658726731867",
    "address": "0x77884b7aeaccbf1b8a0c5a33e254391b9b49ea8e",
    "createdAt": {
        "$date": "2023-07-05T15:43:12.622Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:43:12.622Z"
    }
},{
    "_id": {
        "$oid": "64a58fa3ec377c77ad1e4c7a"
    },
    "discordUserId": "443041531914354689",
    "address": "0x69b8a24edc9053b3d007710e7b986df40a0bc7eb",
    "createdAt": {
        "$date": "2023-07-05T15:43:31.845Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:43:31.845Z"
    }
},{
    "_id": {
        "$oid": "64a5907cec377c77ad1e4c83"
    },
    "discordUserId": "842006239956172810",
    "address": "0x0df079f9a3bfe44106db880e7bc462cbe5673f0e",
    "createdAt": {
        "$date": "2023-07-05T15:47:08.499Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:47:08.499Z"
    }
},{
    "_id": {
        "$oid": "64a59201ec377c77ad1e4c8b"
    },
    "discordUserId": "373764645003067393",
    "address": "0x36f22f65a3476f42f6ae813da097dd471fcadeb1",
    "createdAt": {
        "$date": "2023-07-05T15:53:37.928Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:53:37.928Z"
    }
},{
    "_id": {
        "$oid": "64a5921dec377c77ad1e4c92"
    },
    "discordUserId": "409321949412720641",
    "address": "0x325409632bccffac706d378a2eca57cafa21ab11",
    "createdAt": {
        "$date": "2023-07-05T15:54:05.362Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:54:05.362Z"
    }
},{
    "_id": {
        "$oid": "64a592c5ec377c77ad1e4c9f"
    },
    "discordUserId": "623580064998490113",
    "address": "0xfb69e4b694a62812b1c6543bd9723cb4cc001d91",
    "createdAt": {
        "$date": "2023-07-05T15:56:53.039Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:56:53.039Z"
    }
},{
    "_id": {
        "$oid": "64a5934aec377c77ad1e4ca8"
    },
    "discordUserId": "833686761560342538",
    "address": "0x71add64adbb965bafd01437295968502eb61145e",
    "createdAt": {
        "$date": "2023-07-05T15:59:06.940Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T15:59:06.940Z"
    }
},{
    "_id": {
        "$oid": "64a5942cec377c77ad1e4cae"
    },
    "discordUserId": "306421208566726657",
    "address": "0xe140c5ab801b676f8a7040fdcd42011945858b06",
    "createdAt": {
        "$date": "2023-07-05T16:02:52.529Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:02:52.529Z"
    }
},{
    "_id": {
        "$oid": "64a594b9ec377c77ad1e4cb7"
    },
    "discordUserId": "952121749200306178",
    "address": "0xe1452baea1efb49489cf642021c86480965c9e03",
    "createdAt": {
        "$date": "2023-07-05T16:05:13.882Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:05:13.882Z"
    }
},{
    "_id": {
        "$oid": "64a59522ec377c77ad1e4cbe"
    },
    "discordUserId": "745979132780740658",
    "address": "0x3cdc6f91d41f1738e8e1cbd2a06f64dc6da5b0c0",
    "createdAt": {
        "$date": "2023-07-05T16:06:58.886Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:06:58.886Z"
    }
},{
    "_id": {
        "$oid": "64a595b5ec377c77ad1e4cc7"
    },
    "discordUserId": "925823712844988489",
    "address": "0x9debadcaae4820092c8ff7dc741c9ec7d9e95027",
    "createdAt": {
        "$date": "2023-07-05T16:09:25.410Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:09:25.410Z"
    }
},{
    "_id": {
        "$oid": "64a595c0ec377c77ad1e4ccc"
    },
    "discordUserId": "862511703760699392",
    "address": "0xc6571c2fb66825f13b7751b1c334810d397618eb",
    "createdAt": {
        "$date": "2023-07-05T16:09:36.345Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:09:36.345Z"
    }
},{
    "_id": {
        "$oid": "64a59627ec377c77ad1e4cd5"
    },
    "discordUserId": "826795510563340333",
    "address": "0xdd7efb05649ca2d7ea7851a0291d442be8d9a2eb",
    "createdAt": {
        "$date": "2023-07-05T16:11:19.467Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:11:19.467Z"
    }
},{
    "_id": {
        "$oid": "64a59743ec377c77ad1e4cdd"
    },
    "discordUserId": "478162978252783618",
    "address": "0x5d2ca9c220f66a5f181e53bac510fe1e1a0ba268",
    "createdAt": {
        "$date": "2023-07-05T16:16:03.446Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:16:03.446Z"
    }
},{
    "_id": {
        "$oid": "64a59763ec377c77ad1e4ce1"
    },
    "discordUserId": "882755346110750751",
    "address": "0x9abeebbe3b9eaa8b2156e9989c86ac923ba10175",
    "createdAt": {
        "$date": "2023-07-05T16:16:35.552Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:16:35.552Z"
    }
},{
    "_id": {
        "$oid": "64a597a4ec377c77ad1e4ce8"
    },
    "discordUserId": "749225340081143920",
    "address": "0x0d67ba20969fc75824be13ed7bc941c8e00ab03a",
    "createdAt": {
        "$date": "2023-07-05T16:17:40.533Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:17:40.533Z"
    }
},{
    "_id": {
        "$oid": "64a597f8ec377c77ad1e4cef"
    },
    "discordUserId": "429849047973625858",
    "address": "0xfc961534a0a55b925db2c5ee546c8a019c0d78d5",
    "createdAt": {
        "$date": "2023-07-05T16:19:04.211Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:19:04.211Z"
    }
},{
    "_id": {
        "$oid": "64a5989bec377c77ad1e4cf5"
    },
    "discordUserId": "155898405162450945",
    "address": "0x79269c79e84ad6d9ed1b913e1fb30b26c8384629",
    "createdAt": {
        "$date": "2023-07-05T16:21:47.709Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:21:47.709Z"
    }
},{
    "_id": {
        "$oid": "64a59ab0ec377c77ad1e4cfe"
    },
    "discordUserId": "413785275920154625",
    "address": "0x4ff751eb0ab9568a058f89cdb5eca09ed5f5e04d",
    "createdAt": {
        "$date": "2023-07-05T16:30:40.356Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:30:40.356Z"
    }
},{
    "_id": {
        "$oid": "64a59ab0ec377c77ad1e4d02"
    },
    "discordUserId": "848043517754212352",
    "address": "0x35e3a5f9a59a441f5b87416ed68eb99753e59171",
    "createdAt": {
        "$date": "2023-07-05T16:30:40.512Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:30:40.512Z"
    }
},{
    "_id": {
        "$oid": "64a59c1cec377c77ad1e4d0b"
    },
    "discordUserId": "848741533632954408",
    "address": "0x4fde4984945eb103a448859b689cbb2593125f6f",
    "createdAt": {
        "$date": "2023-07-05T16:36:44.308Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:36:44.308Z"
    }
},{
    "_id": {
        "$oid": "64a59ddeec377c77ad1e4d12"
    },
    "discordUserId": "441472614100369419",
    "address": "0x3585ce928de55c1f74e81cc94495f44b6e410128",
    "createdAt": {
        "$date": "2023-07-05T16:44:14.725Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:44:14.725Z"
    }
},{
    "_id": {
        "$oid": "64a59efbec377c77ad1e4d19"
    },
    "discordUserId": "197441674194976768",
    "address": "0x56abdefe02acbe75badace6c7e097638b065add8",
    "createdAt": {
        "$date": "2023-07-05T16:48:59.430Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:48:59.430Z"
    }
},{
    "_id": {
        "$oid": "64a59f3fec377c77ad1e4d20"
    },
    "discordUserId": "327444590271528963",
    "address": "0xd93ec7e214c50fe64050d0a88002942f0e242659",
    "createdAt": {
        "$date": "2023-07-05T16:50:07.568Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:50:07.568Z"
    }
},{
    "_id": {
        "$oid": "64a5a01bec377c77ad1e4d28"
    },
    "discordUserId": "338494022324846594",
    "address": "0x67592c823bcd2fefc6987766584e17aab6d582c0",
    "createdAt": {
        "$date": "2023-07-05T16:53:47.874Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T16:53:47.874Z"
    }
},{
    "_id": {
        "$oid": "64a5aa95ec377c77ad1e4d3f"
    },
    "discordUserId": "386942217580969985",
    "address": "0x5f399c16058cf3e0a243c2550225c9c12defb64e",
    "createdAt": {
        "$date": "2023-07-05T17:38:29.409Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T17:38:29.409Z"
    }
},{
    "_id": {
        "$oid": "64a5aeb6ec377c77ad1e4d44"
    },
    "discordUserId": "128524461975666688",
    "address": "0x934c80e3a3e9136ee3558950385b66ac5e7d9bf7",
    "createdAt": {
        "$date": "2023-07-05T17:56:06.707Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T17:56:06.707Z"
    }
},{
    "_id": {
        "$oid": "64a5ba85ec377c77ad1e4d55"
    },
    "discordUserId": "768908338086805606",
    "address": "0x340209c8975508a8b6750c01ae290db038a275c5",
    "createdAt": {
        "$date": "2023-07-05T18:46:29.898Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T18:46:29.898Z"
    }
},{
    "_id": {
        "$oid": "64a5bc29ec377c77ad1e4d60"
    },
    "discordUserId": "572065271305469962",
    "address": "0x04accb2c2835f0fedb1cd67a644d3ebba49c7399",
    "createdAt": {
        "$date": "2023-07-05T18:53:29.960Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T18:53:29.960Z"
    }
},{
    "_id": {
        "$oid": "64a5bc40ec377c77ad1e4d65"
    },
    "discordUserId": "964181808344358933",
    "address": "0xc969a10372391724205869e80a9bbb54fff7e2c4",
    "createdAt": {
        "$date": "2023-07-05T18:53:52.425Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T18:53:52.425Z"
    }
},{
    "_id": {
        "$oid": "64a5bd8dec377c77ad1e4d6c"
    },
    "discordUserId": "586310407983988917",
    "address": "0x702d2f5d52811d08a2211b49a8524355b9aeee6c",
    "createdAt": {
        "$date": "2023-07-05T18:59:25.623Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T18:59:25.623Z"
    }
},{
    "_id": {
        "$oid": "64a5bf25ec377c77ad1e4d73"
    },
    "discordUserId": "335149830621888514",
    "address": "0x6c36e66695c38598a08b15e1c6bea9ae0bcf860e",
    "createdAt": {
        "$date": "2023-07-05T19:06:13.725Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T19:06:13.725Z"
    }
},{
    "_id": {
        "$oid": "64a5c1c9ec377c77ad1e4d7a"
    },
    "discordUserId": "880033488282214460",
    "address": "0xf7dd33f4ab790059b9ce53f00f8f14f39e10657b",
    "createdAt": {
        "$date": "2023-07-05T19:17:29.959Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T19:17:29.959Z"
    }
},{
    "_id": {
        "$oid": "64a5c5feec377c77ad1e4d86"
    },
    "discordUserId": "1040416701893849148",
    "address": "0x11faf40ffc2f2a60d22d5431ace9d9d61612d22d",
    "createdAt": {
        "$date": "2023-07-05T19:35:26.869Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T19:35:26.869Z"
    }
},{
    "_id": {
        "$oid": "64a5ccccec377c77ad1e4d98"
    },
    "discordUserId": "426239880104902656",
    "address": "0x3ffc0798104e28aaa7b8d4f05c6193035d2916e3",
    "createdAt": {
        "$date": "2023-07-05T20:04:28.481Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T20:04:28.481Z"
    }
},{
    "_id": {
        "$oid": "64a5ce5fec377c77ad1e4da1"
    },
    "discordUserId": "911976853462470706",
    "address": "0x4ebb399c5c03891889f21e726ecb72ee05a7fb5b",
    "createdAt": {
        "$date": "2023-07-05T20:11:11.514Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T20:11:11.514Z"
    }
},{
    "_id": {
        "$oid": "64a5d590ec377c77ad1e4da8"
    },
    "discordUserId": "780126882548023317",
    "address": "0x465f302c87d19fad8d0f3c5156ecfbee2b97d342",
    "createdAt": {
        "$date": "2023-07-05T20:41:52.259Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T20:41:52.259Z"
    }
},{
    "_id": {
        "$oid": "64a5d6c1ec377c77ad1e4db1"
    },
    "discordUserId": "936531796479332413",
    "address": "0xc7076a538613bd0f1f5224deebae10257170b41c",
    "createdAt": {
        "$date": "2023-07-05T20:46:57.656Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T20:46:57.656Z"
    }
},{
    "_id": {
        "$oid": "64a5d71eec377c77ad1e4db6"
    },
    "discordUserId": "811900115874742273",
    "address": "0xfa74c11a96c937d2bd9d6821c2e75c98a70cb690",
    "createdAt": {
        "$date": "2023-07-05T20:48:30.459Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T20:48:30.459Z"
    }
},{
    "_id": {
        "$oid": "64a5e20eec377c77ad1e4dc3"
    },
    "discordUserId": "834136925442801754",
    "address": "0x24bd901811609c265c1b1f2f791e40d1441154bc",
    "createdAt": {
        "$date": "2023-07-05T21:35:10.298Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T21:35:10.298Z"
    }
},{
    "_id": {
        "$oid": "64a5e454ec377c77ad1e4dcc"
    },
    "discordUserId": "405976040327086080",
    "address": "0xbc71a5170b3c8386e80591bdf95c3e2cbdc6c890",
    "createdAt": {
        "$date": "2023-07-05T21:44:52.952Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T21:44:52.952Z"
    }
},{
    "_id": {
        "$oid": "64a5ed2aec377c77ad1e4dd7"
    },
    "discordUserId": "1006929002713325579",
    "address": "0xf0a5b2b6cae282ad9a63f6f39551a831f5def915",
    "createdAt": {
        "$date": "2023-07-05T22:22:34.043Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T22:22:34.043Z"
    }
},{
    "_id": {
        "$oid": "64a603d9ec377c77ad1e4de6"
    },
    "discordUserId": "843491575899488307",
    "address": "0x765e9af7210c2d120096ce5b5709e8060b710474",
    "createdAt": {
        "$date": "2023-07-05T23:59:21.784Z"
    },
    "updatedAt": {
        "$date": "2023-07-05T23:59:21.784Z"
    }
},{
    "_id": {
        "$oid": "64a60fc9ec377c77ad1e4def"
    },
    "discordUserId": "889144911184683029",
    "address": "0x465fe8f2122966769b3d9d1e7391edf0ac08cb43",
    "createdAt": {
        "$date": "2023-07-06T00:50:17.114Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T00:50:17.114Z"
    }
},{
    "_id": {
        "$oid": "64a6102eec377c77ad1e4df6"
    },
    "discordUserId": "468940429086294016",
    "address": "0xaccb019890bf879d19f5aab1db068057e4cea0f4",
    "createdAt": {
        "$date": "2023-07-06T00:51:58.797Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T00:51:58.797Z"
    }
},{
    "_id": {
        "$oid": "64a6121aec377c77ad1e4dfd"
    },
    "discordUserId": "403630941085630464",
    "address": "0xd39ec0556b27bea894718c981470a15724278585",
    "createdAt": {
        "$date": "2023-07-06T01:00:10.863Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T01:00:10.863Z"
    }
},{
    "_id": {
        "$oid": "64a61517ec377c77ad1e4e0a"
    },
    "discordUserId": "712262060326518806",
    "address": "0x120618a7ddff2bdf7cc36c9eabbbfd1699d49a5a",
    "createdAt": {
        "$date": "2023-07-06T01:12:55.257Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T01:12:55.257Z"
    }
},{
    "_id": {
        "$oid": "64a615c9ec377c77ad1e4e12"
    },
    "discordUserId": "354076078052081665",
    "address": "0xfb488d2a34a26b64ac6a8c70ace61ab03189af62",
    "createdAt": {
        "$date": "2023-07-06T01:15:53.565Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T01:15:53.565Z"
    }
},{
    "_id": {
        "$oid": "64a61695ec377c77ad1e4e18"
    },
    "discordUserId": "858015482024165416",
    "address": "0x23ffa003d2d6ca396708cb41d482907fbd19b0e1",
    "createdAt": {
        "$date": "2023-07-06T01:19:17.501Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T01:19:17.501Z"
    }
},{
    "_id": {
        "$oid": "64a61f72ec377c77ad1e4e23"
    },
    "discordUserId": "865066908541648937",
    "address": "0xcf7a2743d3674dfbb758ac24611de3359e0493ac",
    "createdAt": {
        "$date": "2023-07-06T01:57:06.976Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T01:57:06.976Z"
    }
},{
    "_id": {
        "$oid": "64a6227eec377c77ad1e4e2a"
    },
    "discordUserId": "733053631384780952",
    "address": "0x60fb4b046b07ce529fb93598286339873d26dd0c",
    "createdAt": {
        "$date": "2023-07-06T02:10:06.076Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T02:10:06.076Z"
    }
},{
    "_id": {
        "$oid": "64a6240cec377c77ad1e4e31"
    },
    "discordUserId": "1126191776114429972",
    "address": "0x2aa6b66ce9432a67953d1f37533cf0b05a5f6e08",
    "createdAt": {
        "$date": "2023-07-06T02:16:44.941Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T02:16:44.941Z"
    }
},{
    "_id": {
        "$oid": "64a6308eec377c77ad1e4e38"
    },
    "discordUserId": "929962028062347295",
    "address": "0xf8926a177273202755f9fa930c96285e612375ac",
    "createdAt": {
        "$date": "2023-07-06T03:10:06.613Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T03:10:06.613Z"
    }
},{
    "_id": {
        "$oid": "64a634fcec377c77ad1e4e42"
    },
    "discordUserId": "508344260660166666",
    "address": "0xa6d9a105163fc67a61f0a4d1d5c4032a1e51501b",
    "createdAt": {
        "$date": "2023-07-06T03:29:00.728Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T03:29:00.728Z"
    }
},{
    "_id": {
        "$oid": "64a656c2ec377c77ad1e4e4b"
    },
    "discordUserId": "878988737114173470",
    "address": "0x0f27f672d7ab745d9f4a9d973140f69179e8fd84",
    "createdAt": {
        "$date": "2023-07-06T05:53:06.976Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T05:53:06.976Z"
    }
},{
    "_id": {
        "$oid": "64a668ffec377c77ad1e4e62"
    },
    "discordUserId": "407470289421598721",
    "address": "0xaa56c1febdb4c9698cc09b6065efe23443474114",
    "createdAt": {
        "$date": "2023-07-06T07:10:55.083Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T07:10:55.083Z"
    }
},{
    "_id": {
        "$oid": "64a66d18ec377c77ad1e4e69"
    },
    "discordUserId": "562006769639882765",
    "address": "0x9cd75894548a8969e924f0b3af6bf8dc27612b71",
    "createdAt": {
        "$date": "2023-07-06T07:28:24.003Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T07:28:24.003Z"
    }
},{
    "_id": {
        "$oid": "64a66fbaec377c77ad1e4e6f"
    },
    "discordUserId": "436800749117374465",
    "address": "0x45376f3927b74d4625d5c1ce3fff609dcbf8245a",
    "createdAt": {
        "$date": "2023-07-06T07:39:38.147Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T07:39:38.147Z"
    }
},{
    "_id": {
        "$oid": "64a67264ec377c77ad1e4e77"
    },
    "discordUserId": "851796996431937566",
    "address": "0xb5bf6ce1597504bc086fa7c17e73397fce1a50f5",
    "createdAt": {
        "$date": "2023-07-06T07:51:00.667Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T07:51:00.667Z"
    }
},{
    "_id": {
        "$oid": "64a673beec377c77ad1e4e81"
    },
    "discordUserId": "921668834501476434",
    "address": "0x8459d0ff48d1a3160e91e20e7f50b1f87e33e754",
    "createdAt": {
        "$date": "2023-07-06T07:56:46.285Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T07:56:46.285Z"
    }
},{
    "_id": {
        "$oid": "64a69714ec377c77ad1e4e97"
    },
    "discordUserId": "774711139568975924",
    "address": "0xee01c4672a7a8b6ce04371e5c0771c381e56c898",
    "createdAt": {
        "$date": "2023-07-06T10:27:32.734Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T10:27:32.734Z"
    }
},{
    "_id": {
        "$oid": "64a6a209ec377c77ad1e4ea6"
    },
    "discordUserId": "909534261999194172",
    "address": "0x08eb0034082e7cecc9dff0cea5d6d247f83782d2",
    "createdAt": {
        "$date": "2023-07-06T11:14:17.322Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T11:14:17.322Z"
    }
},{
    "_id": {
        "$oid": "64a6a5ceec377c77ad1e4ead"
    },
    "discordUserId": "396731063151624193",
    "address": "0x40bb0be4171a888da2a6c46ac6ae505a63fb3ae9",
    "createdAt": {
        "$date": "2023-07-06T11:30:22.528Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T11:30:22.528Z"
    }
},{
    "_id": {
        "$oid": "64a6b5e4ec377c77ad1e4eb4"
    },
    "discordUserId": "899938090741817445",
    "address": "0x14a6e7c49a89e6e90449b8e59ad97dd8e0ce8881",
    "createdAt": {
        "$date": "2023-07-06T12:39:00.409Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T12:39:00.409Z"
    }
},{
    "_id": {
        "$oid": "64a6ca30ec377c77ad1e4ebe"
    },
    "discordUserId": "1073035210767204492",
    "address": "0x1241ef66fd50919f909f33b5333976c99635c13f",
    "createdAt": {
        "$date": "2023-07-06T14:05:36.510Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T14:05:36.510Z"
    }
},{
    "_id": {
        "$oid": "64a6dca1ec377c77ad1e4ec9"
    },
    "discordUserId": "410756222158110730",
    "address": "0x9c1dcb699e6af3ae59b7219e5ea7fef6d9fcf9c3",
    "createdAt": {
        "$date": "2023-07-06T15:24:17.354Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T15:24:17.354Z"
    }
},{
    "_id": {
        "$oid": "64a6df71ec377c77ad1e4ed0"
    },
    "discordUserId": "112483610677784576",
    "address": "0x59d66b384a75433add7fd55b04586254f79af94a",
    "createdAt": {
        "$date": "2023-07-06T15:36:17.152Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T15:36:17.152Z"
    }
},{
    "_id": {
        "$oid": "64a6e0f1ec377c77ad1e4eda"
    },
    "discordUserId": "833716937279537193",
    "address": "0xe93086375044d0ac07acb498bf6d8b25bd53fcb1",
    "createdAt": {
        "$date": "2023-07-06T15:42:41.915Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T15:42:41.915Z"
    }
},{
    "_id": {
        "$oid": "64a6e294ec377c77ad1e4ee1"
    },
    "discordUserId": "350172873568288768",
    "address": "0x25d8a0d5708bca2130ccb0338e3d564d9827b07a",
    "createdAt": {
        "$date": "2023-07-06T15:49:40.175Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T15:49:40.175Z"
    }
},{
    "_id": {
        "$oid": "64a6e8c5ec377c77ad1e4eed"
    },
    "discordUserId": "804051418944241705",
    "address": "0x523be2d66ff21069840118d18e2a3aa55a866cf6",
    "createdAt": {
        "$date": "2023-07-06T16:16:05.325Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T16:16:05.325Z"
    }
},{
    "_id": {
        "$oid": "64a6f7d1ec377c77ad1e4ef6"
    },
    "discordUserId": "142135238179553280",
    "address": "0x62bd4cdb6a9cfe6b3ca3ad57ea7db61b9ea2ec42",
    "createdAt": {
        "$date": "2023-07-06T17:20:17.194Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T17:20:17.194Z"
    }
},{
    "_id": {
        "$oid": "64a7218fec377c77ad1e4f0a"
    },
    "discordUserId": "838508015657287741",
    "address": "0x0faca1a5cb35f7259b8f2380466be0a05dd4d3eb",
    "createdAt": {
        "$date": "2023-07-06T20:18:23.613Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T20:18:23.613Z"
    }
},{
    "_id": {
        "$oid": "64a73b91ec377c77ad1e4f1d"
    },
    "discordUserId": "396083312499752960",
    "address": "0x2c59900b9442b7a865f93219c04f553a0d7bd003",
    "createdAt": {
        "$date": "2023-07-06T22:09:21.126Z"
    },
    "updatedAt": {
        "$date": "2023-07-06T22:09:21.126Z"
    }
},{
    "_id": {
        "$oid": "64a7b4c7ec377c77ad1e4f36"
    },
    "discordUserId": "806764084337836033",
    "address": "0x7ec6be1c8630a54df55d98530b89cdfea1c11022",
    "createdAt": {
        "$date": "2023-07-07T06:46:31.965Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T06:46:31.965Z"
    }
},{
    "_id": {
        "$oid": "64a7ee9eec377c77ad1e4f41"
    },
    "discordUserId": "734732351719866420",
    "address": "0xb68dabf88e221fb4469928ba1ea6dd312a342aaa",
    "createdAt": {
        "$date": "2023-07-07T10:53:18.889Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T10:53:18.889Z"
    }
},{
    "_id": {
        "$oid": "64a829b0ec377c77ad1e4f4b"
    },
    "discordUserId": "888265952221872149",
    "address": "0x717a54bb10b3a521cba342cd5bab2fb1b693645b",
    "createdAt": {
        "$date": "2023-07-07T15:05:20.367Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T15:05:20.367Z"
    }
},{
    "_id": {
        "$oid": "64a82ff4ec377c77ad1e4f55"
    },
    "discordUserId": "935920751175954442",
    "address": "0xe64ad79e3db72dceda1840c75b3753ae385c7596",
    "createdAt": {
        "$date": "2023-07-07T15:32:04.679Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T15:32:04.679Z"
    }
},{
    "_id": {
        "$oid": "64a8308aec377c77ad1e4f5c"
    },
    "discordUserId": "434012226836365312",
    "address": "0x9c92f6c44254b2d41a3910fe6d958f953e095b07",
    "createdAt": {
        "$date": "2023-07-07T15:34:34.228Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T15:34:34.228Z"
    }
},{
    "_id": {
        "$oid": "64a83795ec377c77ad1e4f79"
    },
    "discordUserId": "838915669742977075",
    "address": "0x80fba1f1f11b7f4e2bbf0197da045fb82002c9da",
    "createdAt": {
        "$date": "2023-07-07T16:04:37.701Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T16:04:37.701Z"
    }
},{
    "_id": {
        "$oid": "64a83b93ec377c77ad1e4f80"
    },
    "discordUserId": "625517455141502986",
    "address": "0x0d86e97bada05d91b6c6201a4efcdf978d1807da",
    "createdAt": {
        "$date": "2023-07-07T16:21:39.773Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T16:21:39.773Z"
    }
},{
    "_id": {
        "$oid": "64a83da5ec377c77ad1e4f89"
    },
    "discordUserId": "379971521277591563",
    "address": "0x51256ef00c2485f3a40fe1b6e4e779147bcdbb58",
    "createdAt": {
        "$date": "2023-07-07T16:30:29.859Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T16:30:29.859Z"
    }
},{
    "_id": {
        "$oid": "64a8544cec377c77ad1e4f9c"
    },
    "discordUserId": "776605811958480926",
    "address": "0xcf1cf25e5cd7aea5f86d8400d600411be1d85d90",
    "createdAt": {
        "$date": "2023-07-07T18:07:08.315Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T18:07:08.315Z"
    }
},{
    "_id": {
        "$oid": "64a896a7ec377c77ad1e4fab"
    },
    "discordUserId": "713103096540037190",
    "address": "0x68820e5cdbdbb1cb131151dbb203d4fef563fa4d",
    "createdAt": {
        "$date": "2023-07-07T22:50:15.020Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T22:50:15.020Z"
    }
},{
    "_id": {
        "$oid": "64a898f5ec377c77ad1e4fb2"
    },
    "discordUserId": "794883367471677442",
    "address": "0xf38b07b8ac72ad70806e902c2ecfb7edd36ca3f5",
    "createdAt": {
        "$date": "2023-07-07T23:00:05.440Z"
    },
    "updatedAt": {
        "$date": "2023-07-07T23:00:05.440Z"
    }
},{
    "_id": {
        "$oid": "64a8b379ec377c77ad1e4fb9"
    },
    "discordUserId": "908871685124546581",
    "address": "0x8731372c0bbdfd496c6f85dc3ae9fe945ff9e184",
    "createdAt": {
        "$date": "2023-07-08T00:53:13.147Z"
    },
    "updatedAt": {
        "$date": "2023-07-08T00:53:13.147Z"
    }
},{
    "_id": {
        "$oid": "64a8d5f6ec377c77ad1e4fc0"
    },
    "discordUserId": "1001261369288556635",
    "address": "0x3d84cbb9a498cfa03b6a012ff5ee30239a5689e2",
    "createdAt": {
        "$date": "2023-07-08T03:20:22.047Z"
    },
    "updatedAt": {
        "$date": "2023-07-08T03:20:22.047Z"
    }
},{
    "_id": {
        "$oid": "64a92b71ec377c77ad1e4fd1"
    },
    "discordUserId": "896619136501841941",
    "address": "0x11a42db923de9bde2b71186f832b1f890f999888",
    "createdAt": {
        "$date": "2023-07-08T09:25:05.805Z"
    },
    "updatedAt": {
        "$date": "2023-07-08T09:25:05.805Z"
    }
},{
    "_id": {
        "$oid": "64a94dcfec377c77ad1e4fda"
    },
    "discordUserId": "390203963758346261",
    "address": "0xf3b8869c906f5c185084ab379de0c607f23f4747",
    "createdAt": {
        "$date": "2023-07-08T11:51:43.375Z"
    },
    "updatedAt": {
        "$date": "2023-07-08T11:51:43.375Z"
    }
},{
    "_id": {
        "$oid": "64a9cb6eec377c77ad1e4fe9"
    },
    "discordUserId": "786819423645335602",
    "address": "0x383f554cadc3cf7a7a2c1f649dc947e86d995ef1",
    "createdAt": {
        "$date": "2023-07-08T20:47:42.221Z"
    },
    "updatedAt": {
        "$date": "2023-07-08T20:47:42.221Z"
    }
},{
    "_id": {
        "$oid": "64a9e380ec377c77ad1e4ff0"
    },
    "discordUserId": "827566301932814357",
    "address": "0xc14352ad978771051f46a3c8eebd43add56a6899",
    "createdAt": {
        "$date": "2023-07-08T22:30:24.164Z"
    },
    "updatedAt": {
        "$date": "2023-07-08T22:30:24.164Z"
    }
},{
    "_id": {
        "$oid": "64a9f60aec377c77ad1e4ff6"
    },
    "discordUserId": "919789323182805052",
    "address": "0x7e66dc013571b49f347905431f19b12fb0bc7133",
    "createdAt": {
        "$date": "2023-07-08T23:49:30.981Z"
    },
    "updatedAt": {
        "$date": "2023-07-08T23:49:30.981Z"
    }
},{
    "_id": {
        "$oid": "64aa1daeec377c77ad1e4fff"
    },
    "discordUserId": "923867195535130644",
    "address": "0x5dfbc15314501fe246b7d6091488b5bd55277b3a",
    "createdAt": {
        "$date": "2023-07-09T02:38:38.413Z"
    },
    "updatedAt": {
        "$date": "2023-07-09T02:38:38.413Z"
    }
},{
    "_id": {
        "$oid": "64aa77aeec377c77ad1e5006"
    },
    "discordUserId": "358941908976009216",
    "address": "0x3a92b4bf4f6528dd12f8b0feb4e91768f65be781",
    "createdAt": {
        "$date": "2023-07-09T09:02:38.770Z"
    },
    "updatedAt": {
        "$date": "2023-07-09T09:02:38.770Z"
    }
},{
    "_id": {
        "$oid": "64aac006ec377c77ad1e501e"
    },
    "discordUserId": "667491002453590048",
    "address": "0x80b744588fd2fea8ef14386bd953493a097eadb0",
    "createdAt": {
        "$date": "2023-07-09T14:11:18.595Z"
    },
    "updatedAt": {
        "$date": "2023-07-09T14:11:18.595Z"
    }
},{
    "_id": {
        "$oid": "64aaecb2ec377c77ad1e5025"
    },
    "discordUserId": "747093375961792632",
    "address": "0x316cf81e37bd57210618592b88fe9e5ec2bbc847",
    "createdAt": {
        "$date": "2023-07-09T17:21:54.798Z"
    },
    "updatedAt": {
        "$date": "2023-07-09T17:21:54.798Z"
    }
},{
    "_id": {
        "$oid": "64abd291ec377c77ad1e503b"
    },
    "discordUserId": "1024951598390198322",
    "address": "0xb7ee483080b3b1a82e24b3c80d94c5c1f536fdb7",
    "createdAt": {
        "$date": "2023-07-10T09:42:41.666Z"
    },
    "updatedAt": {
        "$date": "2023-07-10T09:42:41.666Z"
    }
},{
    "_id": {
        "$oid": "64ac0f99ec377c77ad1e5042"
    },
    "discordUserId": "759821453507166248",
    "address": "0xda4c20bb77eea27a47d27adabf2071328d93a67a",
    "createdAt": {
        "$date": "2023-07-10T14:03:05.304Z"
    },
    "updatedAt": {
        "$date": "2023-07-10T14:03:05.304Z"
    }
},{
    "_id": {
        "$oid": "64ac2be0ec377c77ad1e5049"
    },
    "discordUserId": "673420084965801984",
    "address": "0x4b0f861ca9455422fafe7e7a6080f193b54aaa4c",
    "createdAt": {
        "$date": "2023-07-10T16:03:44.373Z"
    },
    "updatedAt": {
        "$date": "2023-07-10T16:03:44.373Z"
    }
},{
    "_id": {
        "$oid": "64ac35a8ec377c77ad1e504e"
    },
    "discordUserId": "717317442090827827",
    "address": "0x0c9c3ba64072eb566b0e9a4b6bb0d7b204d68469",
    "createdAt": {
        "$date": "2023-07-10T16:45:28.546Z"
    },
    "updatedAt": {
        "$date": "2023-07-10T16:45:28.546Z"
    }
},{
    "_id": {
        "$oid": "64acfd13ec377c77ad1e5055"
    },
    "discordUserId": "821786579735019531",
    "address": "0xd88d0de304381c96d54af059bea11958827cc322",
    "createdAt": {
        "$date": "2023-07-11T06:56:19.574Z"
    },
    "updatedAt": {
        "$date": "2023-07-11T06:56:19.574Z"
    }
},{
    "_id": {
        "$oid": "64ad4fe7ec377c77ad1e5066"
    },
    "discordUserId": "938139107048161340",
    "address": "0x70ad81d18f2838b8650d88740d8e337032c9baac",
    "createdAt": {
        "$date": "2023-07-11T12:49:43.933Z"
    },
    "updatedAt": {
        "$date": "2023-07-11T12:49:43.933Z"
    }
},{
    "_id": {
        "$oid": "64ad6b60ec377c77ad1e506f"
    },
    "discordUserId": "914824679573844009",
    "address": "0x671ec62d8654f3d553dcc92cb833c5d0231903a2",
    "createdAt": {
        "$date": "2023-07-11T14:46:56.448Z"
    },
    "updatedAt": {
        "$date": "2023-07-11T14:46:56.448Z"
    }
},{
    "_id": {
        "$oid": "64ad738bec377c77ad1e5075"
    },
    "discordUserId": "356110321343004672",
    "address": "0x6ec7b4fec23015ed9daa8dbf0e3573da69e5d36e",
    "createdAt": {
        "$date": "2023-07-11T15:21:47.124Z"
    },
    "updatedAt": {
        "$date": "2023-07-11T15:21:47.124Z"
    }
},{
    "_id": {
        "$oid": "64adaafdec377c77ad1e507f"
    },
    "discordUserId": "587429893751570451",
    "address": "0x7f519a1051a8e091e3bef874a1b6b50d9b8295f0",
    "createdAt": {
        "$date": "2023-07-11T19:18:21.293Z"
    },
    "updatedAt": {
        "$date": "2023-07-11T19:18:21.293Z"
    }
},{
    "_id": {
        "$oid": "64afa03dec377c77ad1e50a1"
    },
    "discordUserId": "869977712243114026",
    "address": "0xbad447203d16fe48d7c2c42032b49f392ac055f6",
    "createdAt": {
        "$date": "2023-07-13T06:57:01.197Z"
    },
    "updatedAt": {
        "$date": "2023-07-13T06:57:01.197Z"
    }
},{
    "_id": {
        "$oid": "64afee73ec377c77ad1e50ab"
    },
    "discordUserId": "691025015952638003",
    "address": "0x03da4af92cdfe051f70897ad41bb80a24f08eb7e",
    "createdAt": {
        "$date": "2023-07-13T12:30:43.850Z"
    },
    "updatedAt": {
        "$date": "2023-07-13T12:30:43.850Z"
    }
},{
    "_id": {
        "$oid": "64b037b8ec377c77ad1e50b1"
    },
    "discordUserId": "947867508843630662",
    "address": "0xba35e0dc08639ff7761c04d65b0781736b66481b",
    "createdAt": {
        "$date": "2023-07-13T17:43:20.403Z"
    },
    "updatedAt": {
        "$date": "2023-07-13T17:43:20.403Z"
    }
},{
    "_id": {
        "$oid": "64b12d0dec377c77ad1e50bf"
    },
    "discordUserId": "1007466297543639130",
    "address": "0x75f2d6790159a878045462d01de7115425cc2898",
    "createdAt": {
        "$date": "2023-07-14T11:10:05.170Z"
    },
    "updatedAt": {
        "$date": "2023-07-14T11:10:05.170Z"
    }
},{
    "_id": {
        "$oid": "64b132e4ec377c77ad1e50cb"
    },
    "discordUserId": "507432728363532300",
    "address": "0xeb057c509cf30cc45b0f52c8e507ac3cf8e78777",
    "createdAt": {
        "$date": "2023-07-14T11:35:00.540Z"
    },
    "updatedAt": {
        "$date": "2023-07-14T11:35:00.540Z"
    }
},{
    "_id": {
        "$oid": "64b136a7ec377c77ad1e50d2"
    },
    "discordUserId": "200936453419696144",
    "address": "0x7e3fe90ac8ea3f05cacd2d603bf7557e612c2d2b",
    "createdAt": {
        "$date": "2023-07-14T11:51:03.505Z"
    },
    "updatedAt": {
        "$date": "2023-07-14T11:51:03.505Z"
    }
},{
    "_id": {
        "$oid": "64b13c47ec377c77ad1e50db"
    },
    "discordUserId": "891604889665409024",
    "address": "0x69cd1c2e13113c09a22ff98cbd2db3f682f716b4",
    "createdAt": {
        "$date": "2023-07-14T12:15:03.775Z"
    },
    "updatedAt": {
        "$date": "2023-07-14T12:15:03.775Z"
    }
},{
    "_id": {
        "$oid": "64b14894ec377c77ad1e50e1"
    },
    "discordUserId": "827150810063831050",
    "address": "0x67918ba8ef203852c14d87f049378ea647516b11",
    "createdAt": {
        "$date": "2023-07-14T13:07:32.177Z"
    },
    "updatedAt": {
        "$date": "2023-07-14T13:07:32.177Z"
    }
},{
    "_id": {
        "$oid": "64b22554ec377c77ad1e50f0"
    },
    "discordUserId": "952076182348763176",
    "address": "0x982dd304cf5d140b5c1673999ccb4e69dc1e7e53",
    "createdAt": {
        "$date": "2023-07-15T04:49:24.874Z"
    },
    "updatedAt": {
        "$date": "2023-07-15T04:49:24.874Z"
    }
},{
    "_id": {
        "$oid": "64b27112ec377c77ad1e50fb"
    },
    "discordUserId": "808659811323478037",
    "address": "0xf4f58044b4afbaa53bffd87f2dce77a5f0b32a64",
    "createdAt": {
        "$date": "2023-07-15T10:12:34.734Z"
    },
    "updatedAt": {
        "$date": "2023-07-15T10:12:34.734Z"
    }
},{
    "_id": {
        "$oid": "64b295c7ec377c77ad1e5102"
    },
    "discordUserId": "896007790471049236",
    "address": "0x89231f349f6c4910174baf1fd8155485eb817365",
    "createdAt": {
        "$date": "2023-07-15T12:49:11.692Z"
    },
    "updatedAt": {
        "$date": "2023-07-15T12:49:11.692Z"
    }
},{
    "_id": {
        "$oid": "64b3ce91ec377c77ad1e510f"
    },
    "discordUserId": "351133503741493259",
    "address": "0x0028f13af6005beb678a14e9825cc5de784756a7",
    "createdAt": {
        "$date": "2023-07-16T11:03:45.650Z"
    },
    "updatedAt": {
        "$date": "2023-07-16T11:03:45.650Z"
    }
},{
    "_id": {
        "$oid": "64b3f45cec377c77ad1e511c"
    },
    "discordUserId": "1012418874559434752",
    "address": "0x2607084b0f342daa5c3157cb85a27b6ac3f60de3",
    "createdAt": {
        "$date": "2023-07-16T13:45:00.063Z"
    },
    "updatedAt": {
        "$date": "2023-07-16T13:45:00.063Z"
    }
},{
    "_id": {
        "$oid": "64b44765ec377c77ad1e5123"
    },
    "discordUserId": "831810098622890004",
    "address": "0xf0244b65ea65495447bf1ead85a0520a04abe2c3",
    "createdAt": {
        "$date": "2023-07-16T19:39:17.179Z"
    },
    "updatedAt": {
        "$date": "2023-07-16T19:39:17.179Z"
    }
},{
    "_id": {
        "$oid": "64b45e1bec377c77ad1e512b"
    },
    "discordUserId": "265639060918370304",
    "address": "0x9cab916493d31d1114a1d4f9a497aa886c1506e9",
    "createdAt": {
        "$date": "2023-07-16T21:16:11.364Z"
    },
    "updatedAt": {
        "$date": "2023-07-16T21:16:11.364Z"
    }
},{
    "_id": {
        "$oid": "64b63c04728cb4bea7d66a28"
    },
    "discordUserId": "282227420181037056",
    "address": "0xf2ba2ead3d26c213721114a02e0c56d8631ae388",
    "createdAt": {
        "$date": "2023-07-18T07:15:16.626Z"
    },
    "updatedAt": {
        "$date": "2023-07-18T07:15:16.626Z"
    }
},{
    "_id": {
        "$oid": "64b712e5728cb4bea7d66a31"
    },
    "discordUserId": "915286451531427911",
    "address": "0xa03a01faa16f71fba7b9a1eabcb32bd316a9102a",
    "createdAt": {
        "$date": "2023-07-18T22:32:05.331Z"
    },
    "updatedAt": {
        "$date": "2023-07-18T22:32:05.331Z"
    }
},{
    "_id": {
        "$oid": "64b7ffa2728cb4bea7d66a3c"
    },
    "discordUserId": "703560530719408189",
    "address": "0x5aaacedf5a180e084d5ebac2e55ea484cf0d2780",
    "createdAt": {
        "$date": "2023-07-19T15:22:10.906Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T15:22:10.906Z"
    }
},{
    "_id": {
        "$oid": "64b801ce728cb4bea7d66a4e"
    },
    "discordUserId": "217671015692500993",
    "address": "0x0507b3ffe3836ad0f256f3d53b8fa7653e54e2eb",
    "createdAt": {
        "$date": "2023-07-19T15:31:26.016Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T15:31:26.016Z"
    }
},{
    "_id": {
        "$oid": "64b8055e728cb4bea7d66a57"
    },
    "discordUserId": "774434942712283156",
    "address": "0x47c465e7beac169081371969c0fcf62d10c84ef7",
    "createdAt": {
        "$date": "2023-07-19T15:46:38.268Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T15:46:38.268Z"
    }
},{
    "_id": {
        "$oid": "64b80601728cb4bea7d66a62"
    },
    "discordUserId": "442463742098145301",
    "address": "0x4815ee939fe2efec2f7bc415f0ce2282f6417fe9",
    "createdAt": {
        "$date": "2023-07-19T15:49:21.148Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T15:49:21.148Z"
    }
},{
    "_id": {
        "$oid": "64b80693728cb4bea7d66a68"
    },
    "discordUserId": "348208469762899968",
    "address": "0xef261ba2e734f3571c7bbcbf27a7184e632b565d",
    "createdAt": {
        "$date": "2023-07-19T15:51:47.543Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T15:51:47.543Z"
    }
},{
    "_id": {
        "$oid": "64b80745728cb4bea7d66a72"
    },
    "discordUserId": "498067836644753408",
    "address": "0x29dfa3b040a65ee3fc0da515343c18cdd49c635f",
    "createdAt": {
        "$date": "2023-07-19T15:54:45.405Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T15:54:45.405Z"
    }
},{
    "_id": {
        "$oid": "64b80897728cb4bea7d66a79"
    },
    "discordUserId": "587935589035278356",
    "address": "0x8719c66077e95a6fbc7811446b8c32ee15ac3cd5",
    "createdAt": {
        "$date": "2023-07-19T16:00:23.811Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T16:00:23.811Z"
    }
},{
    "_id": {
        "$oid": "64b80e83728cb4bea7d66a8c"
    },
    "discordUserId": "719339904198377594",
    "address": "0x649fc67b3f798789734bcc750c6e370056b94eaf",
    "createdAt": {
        "$date": "2023-07-19T16:25:39.439Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T16:25:39.439Z"
    }
},{
    "_id": {
        "$oid": "64b815ac728cb4bea7d66aa3"
    },
    "discordUserId": "270968489534029836",
    "address": "0xfb7405075f2dd0a2aaca6ca2d87d56e09577d6ef",
    "createdAt": {
        "$date": "2023-07-19T16:56:12.590Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T16:56:12.590Z"
    }
},{
    "_id": {
        "$oid": "64b815d9728cb4bea7d66aa8"
    },
    "discordUserId": "438660626261344267",
    "address": "0xc78e7731da04aa6e6ce730cca7aae517523f49df",
    "createdAt": {
        "$date": "2023-07-19T16:56:57.597Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T16:56:57.597Z"
    }
},{
    "_id": {
        "$oid": "64b81ac1728cb4bea7d66aba"
    },
    "discordUserId": "830014821554454569",
    "address": "0x8ef351141e9f36cda28db1af4bc6616d4d58a6da",
    "createdAt": {
        "$date": "2023-07-19T17:17:53.296Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T17:17:53.296Z"
    }
},{
    "_id": {
        "$oid": "64b81ad3728cb4bea7d66abf"
    },
    "discordUserId": "922846897507565598",
    "address": "0x01b86aeebcd1ff94ac1195cfc8fd9e39db24db45",
    "createdAt": {
        "$date": "2023-07-19T17:18:11.215Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T17:18:11.215Z"
    }
},{
    "_id": {
        "$oid": "64b822af728cb4bea7d66ad7"
    },
    "discordUserId": "235823439208906757",
    "address": "0x9c9553cd0c8673651a36e5e11c4989bb629d4067",
    "createdAt": {
        "$date": "2023-07-19T17:51:43.858Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T17:51:43.858Z"
    }
},{
    "_id": {
        "$oid": "64b824db728cb4bea7d66ae2"
    },
    "discordUserId": "555647984054829087",
    "address": "0x63c1d4ce3f0ea0a37eda12376205e25d2298af3a",
    "createdAt": {
        "$date": "2023-07-19T18:00:59.301Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T18:00:59.301Z"
    }
},{
    "_id": {
        "$oid": "64b82c93728cb4bea7d66afc"
    },
    "discordUserId": "882245894710366219",
    "address": "0xa3c56b60e018fa19100ee08e9128c3b80b25ba8e",
    "createdAt": {
        "$date": "2023-07-19T18:33:55.791Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T18:33:55.791Z"
    }
},{
    "_id": {
        "$oid": "64b83ac5728cb4bea7d66b0a"
    },
    "discordUserId": "927353130386063410",
    "address": "0x2f7d1616214b2651529beb05857dfc2f3df2fb4b",
    "createdAt": {
        "$date": "2023-07-19T19:34:29.281Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T19:34:29.281Z"
    }
},{
    "_id": {
        "$oid": "64b83af1728cb4bea7d66b0f"
    },
    "discordUserId": "229431485856350208",
    "address": "0x0bda0f33311e65379461d0a555bbd7669c0eaa22",
    "createdAt": {
        "$date": "2023-07-19T19:35:13.977Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T19:35:13.977Z"
    }
},{
    "_id": {
        "$oid": "64b84508728cb4bea7d66b1f"
    },
    "discordUserId": "820629266147835927",
    "address": "0x620f9712999f768600f995666775e7a40d151659",
    "createdAt": {
        "$date": "2023-07-19T20:18:16.382Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T20:18:16.382Z"
    }
},{
    "_id": {
        "$oid": "64b85586728cb4bea7d66b30"
    },
    "discordUserId": "830826930705661982",
    "address": "0xcf24f9db11d7cf69b1f6f438c1a5b576456f6df2",
    "createdAt": {
        "$date": "2023-07-19T21:28:38.217Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T21:28:38.217Z"
    }
},{
    "_id": {
        "$oid": "64b85c32728cb4bea7d66b35"
    },
    "discordUserId": "797982247856242719",
    "address": "0x4a9b562176bd1da06b3cc265f2710251d5e98290",
    "createdAt": {
        "$date": "2023-07-19T21:57:06.674Z"
    },
    "updatedAt": {
        "$date": "2023-07-19T21:57:06.674Z"
    }
},{
    "_id": {
        "$oid": "64b88f5f728cb4bea7d66b4d"
    },
    "discordUserId": "808114137799589891",
    "address": "0x025f4d2d2a34bb022ec22609f01dbdf18ad820e5",
    "createdAt": {
        "$date": "2023-07-20T01:35:27.414Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T01:35:27.414Z"
    }
},{
    "_id": {
        "$oid": "64b8b2e8728cb4bea7d66b58"
    },
    "discordUserId": "787936262845497344",
    "address": "0x99afc0f1d580f5baccfe9d4f864a1f34aaf192ed",
    "createdAt": {
        "$date": "2023-07-20T04:07:04.450Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T04:07:04.450Z"
    }
},{
    "_id": {
        "$oid": "64b8b3c9728cb4bea7d66b5e"
    },
    "discordUserId": "712620853048770572",
    "address": "0xbf1bc5964f7d035f83f159f00209ff4352bd7394",
    "createdAt": {
        "$date": "2023-07-20T04:10:49.366Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T04:10:49.366Z"
    }
},{
    "_id": {
        "$oid": "64b8b3fe728cb4bea7d66b65"
    },
    "discordUserId": "976168724769959966",
    "address": "0x40ee2afbfbc4286b25e2a194920c7d9591eef9dc",
    "createdAt": {
        "$date": "2023-07-20T04:11:42.876Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T04:11:42.876Z"
    }
},{
    "_id": {
        "$oid": "64b8c09f728cb4bea7d66b73"
    },
    "discordUserId": "409657035173527553",
    "address": "0x493409704ec5e2ed28fdad4f48638532228ac693",
    "createdAt": {
        "$date": "2023-07-20T05:05:35.918Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T05:05:35.918Z"
    }
},{
    "_id": {
        "$oid": "64b8e3d8728cb4bea7d66b7d"
    },
    "discordUserId": "680782152811413518",
    "address": "0x61b11000fe497a215fc3759142d5d662993afb93",
    "createdAt": {
        "$date": "2023-07-20T07:35:52.127Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T07:35:52.127Z"
    }
},{
    "_id": {
        "$oid": "64b90af5728cb4bea7d66b92"
    },
    "discordUserId": "376552542295031810",
    "address": "0xfcbc81e0bd5b43361b17173697babb1f131683dc",
    "createdAt": {
        "$date": "2023-07-20T10:22:45.052Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T10:22:45.052Z"
    }
},{
    "_id": {
        "$oid": "64b919da728cb4bea7d66b9e"
    },
    "discordUserId": "756243844324130938",
    "address": "0x06ad2f93b61eb355e6e27d9eb8c67ef8eccfa50e",
    "createdAt": {
        "$date": "2023-07-20T11:26:18.850Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T11:26:18.850Z"
    }
},{
    "_id": {
        "$oid": "64b938c3728cb4bea7d66bb2"
    },
    "discordUserId": "910176698841071616",
    "address": "0x8a87448948625e7ea7822bff2c740c5cf9723d4c",
    "createdAt": {
        "$date": "2023-07-20T13:38:11.991Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T13:38:11.991Z"
    }
},{
    "_id": {
        "$oid": "64b98b2b728cb4bea7d66bc8"
    },
    "discordUserId": "706439975310458881",
    "address": "0x3d4c438f918cf530404fd6dc12f7ad35e05d760a",
    "createdAt": {
        "$date": "2023-07-20T19:29:47.713Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T19:29:47.713Z"
    }
},{
    "_id": {
        "$oid": "64b9a39e728cb4bea7d66bda"
    },
    "discordUserId": "761750411107237901",
    "address": "0xdc0d491bd92861746c745b257edfd8cfa631470a",
    "createdAt": {
        "$date": "2023-07-20T21:14:06.997Z"
    },
    "updatedAt": {
        "$date": "2023-07-20T21:14:06.997Z"
    }
},{
    "_id": {
        "$oid": "64b9d3e8728cb4bea7d66be1"
    },
    "discordUserId": "887308622135197707",
    "address": "0xe4b7fbc0c55299db43553908c36c98afd641d3cf",
    "createdAt": {
        "$date": "2023-07-21T00:40:08.804Z"
    },
    "updatedAt": {
        "$date": "2023-07-21T00:40:08.804Z"
    }
},{
    "_id": {
        "$oid": "64ba2a27728cb4bea7d66bea"
    },
    "discordUserId": "406944225930903553",
    "address": "0x72c5cd18a51d53db34072546a7a38a4f73600d92",
    "createdAt": {
        "$date": "2023-07-21T06:48:07.957Z"
    },
    "updatedAt": {
        "$date": "2023-07-21T06:48:07.957Z"
    }
},{
    "_id": {
        "$oid": "64ba4868728cb4bea7d66bf2"
    },
    "discordUserId": "866985074078646283",
    "address": "0xb609099b6bbab96b126d2542a8d521d6ecf448f0",
    "createdAt": {
        "$date": "2023-07-21T08:57:12.571Z"
    },
    "updatedAt": {
        "$date": "2023-07-21T08:57:12.571Z"
    }
},{
    "_id": {
        "$oid": "64ba8d3d728cb4bea7d66c0f"
    },
    "discordUserId": "787993284508123156",
    "address": "0x106bf19d7f44dfd1e4d41b0890e568ad7fb5e511",
    "createdAt": {
        "$date": "2023-07-21T13:50:53.905Z"
    },
    "updatedAt": {
        "$date": "2023-07-21T13:50:53.905Z"
    }
},{
    "_id": {
        "$oid": "64bac8a8728cb4bea7d66c1d"
    },
    "discordUserId": "818457135280685056",
    "address": "0x29c25cee4e390ba6ea51161aabe814c9a2b0a8f4",
    "createdAt": {
        "$date": "2023-07-21T18:04:24.608Z"
    },
    "updatedAt": {
        "$date": "2023-07-21T18:04:24.608Z"
    }
},{
    "_id": {
        "$oid": "64baf509728cb4bea7d66c26"
    },
    "discordUserId": "455282802624167936",
    "address": "0xced3fc4610761f79242d7d8a72fe86f3a1c626b4",
    "createdAt": {
        "$date": "2023-07-21T21:13:45.081Z"
    },
    "updatedAt": {
        "$date": "2023-07-21T21:13:45.081Z"
    }
},{
    "_id": {
        "$oid": "64bb21af728cb4bea7d66c39"
    },
    "discordUserId": "922546978494222447",
    "address": "0xfa887e2904bdad1775620bcf3936de5593f89a64",
    "createdAt": {
        "$date": "2023-07-22T00:24:15.242Z"
    },
    "updatedAt": {
        "$date": "2023-07-22T00:24:15.242Z"
    }
},{
    "_id": {
        "$oid": "64bbf0f226fa4fb401736d11"
    },
    "discordUserId": "874331410025054208",
    "address": "0xcecc9a129372e6bc63bb35d3d35337fb85bfc1d2",
    "createdAt": {
        "$date": "2023-07-22T15:08:34.174Z"
    },
    "updatedAt": {
        "$date": "2023-07-22T15:08:34.174Z"
    }
},{
    "_id": {
        "$oid": "64bbf92726fa4fb401736d1a"
    },
    "discordUserId": "276573348572561419",
    "address": "0x8a806bc475331f20022d897e4f9dc066bf0324c8",
    "createdAt": {
        "$date": "2023-07-22T15:43:35.524Z"
    },
    "updatedAt": {
        "$date": "2023-07-22T15:43:35.524Z"
    }
},{
    "_id": {
        "$oid": "64bc680e26fa4fb401736d2a"
    },
    "discordUserId": "399269552178987018",
    "address": "0x8d9a3b477a5d85f945973aeebb438bb20620e074",
    "createdAt": {
        "$date": "2023-07-22T23:36:46.098Z"
    },
    "updatedAt": {
        "$date": "2023-07-22T23:36:46.098Z"
    }
},{
    "_id": {
        "$oid": "64bcac0326fa4fb401736d33"
    },
    "discordUserId": "830317702056771594",
    "address": "0x82767b4b962a2c8d0f60df6e4797d77afb108904",
    "createdAt": {
        "$date": "2023-07-23T04:26:43.402Z"
    },
    "updatedAt": {
        "$date": "2023-07-23T04:26:43.402Z"
    }
},{
    "_id": {
        "$oid": "64bcacb726fa4fb401736d38"
    },
    "discordUserId": "958837244683223082",
    "address": "0x83969b71551fbd37abe24e7c603dd860ad671f14",
    "createdAt": {
        "$date": "2023-07-23T04:29:43.522Z"
    },
    "updatedAt": {
        "$date": "2023-07-23T04:29:43.522Z"
    }
},{
    "_id": {
        "$oid": "64bd16313553951ca1e3e0cb"
    },
    "discordUserId": "547949776549838848",
    "address": "0x8c0b6b120f5aea462031ef41dbe5ca77e231d9a7",
    "createdAt": {
        "$date": "2023-07-23T11:59:45.443Z"
    },
    "updatedAt": {
        "$date": "2023-07-23T11:59:45.443Z"
    }
},{
    "_id": {
        "$oid": "64bd1b0a3553951ca1e3e0d2"
    },
    "discordUserId": "409443832095178754",
    "address": "0x49e59de5dbf06ed83116afaa0570bfe13a8d5ba7",
    "createdAt": {
        "$date": "2023-07-23T12:20:26.292Z"
    },
    "updatedAt": {
        "$date": "2023-07-23T12:20:26.292Z"
    }
},{
    "_id": {
        "$oid": "64bdade93553951ca1e3e0dc"
    },
    "discordUserId": "901955202486272020",
    "address": "0xabbf75a59ac8838fa46bd5260501b68ab28b95f6",
    "createdAt": {
        "$date": "2023-07-23T22:47:05.854Z"
    },
    "updatedAt": {
        "$date": "2023-07-23T22:47:05.854Z"
    }
},{
    "_id": {
        "$oid": "64bdf55c3553951ca1e3e0e3"
    },
    "discordUserId": "844774476730466334",
    "address": "0x8efea4475ded9a1b41f862cbfc9956a428507315",
    "createdAt": {
        "$date": "2023-07-24T03:51:56.792Z"
    },
    "updatedAt": {
        "$date": "2023-07-24T03:51:56.792Z"
    }
},{
    "_id": {
        "$oid": "64be05e63553951ca1e3e0ea"
    },
    "discordUserId": "823861454822178830",
    "address": "0xa3c9ba8fe2ddb90653deaa9f8c3e8e218170f3da",
    "createdAt": {
        "$date": "2023-07-24T05:02:30.948Z"
    },
    "updatedAt": {
        "$date": "2023-07-24T05:02:30.948Z"
    }
},{
    "_id": {
        "$oid": "64be39373553951ca1e3e0f1"
    },
    "discordUserId": "624811804895346688",
    "address": "0x1a2b292661f0102c5961afc42b278fe8c9169234",
    "createdAt": {
        "$date": "2023-07-24T08:41:27.623Z"
    },
    "updatedAt": {
        "$date": "2023-07-24T08:41:27.623Z"
    }
},{
    "_id": {
        "$oid": "64be94533553951ca1e3e0fa"
    },
    "discordUserId": "329140338616696832",
    "address": "0xb08f95dbc639621dbaf48a472ae8fce0f6f56a6e",
    "createdAt": {
        "$date": "2023-07-24T15:10:11.613Z"
    },
    "updatedAt": {
        "$date": "2023-07-24T15:10:11.613Z"
    }
},{
    "_id": {
        "$oid": "64be95c93553951ca1e3e101"
    },
    "discordUserId": "358684828713091082",
    "address": "0xa65ba816f1f01ef234b8480b81a2ed5b3544c61a",
    "createdAt": {
        "$date": "2023-07-24T15:16:25.970Z"
    },
    "updatedAt": {
        "$date": "2023-07-24T15:16:25.970Z"
    }
},{
    "_id": {
        "$oid": "64bf6cbe3553951ca1e3e10f"
    },
    "discordUserId": "821866085690507295",
    "address": "0x4210deb9feeb59f4dda3e7295aeb6f39f7f4952d",
    "createdAt": {
        "$date": "2023-07-25T06:33:34.396Z"
    },
    "updatedAt": {
        "$date": "2023-07-25T06:33:34.396Z"
    }
},{
    "_id": {
        "$oid": "64bfe6b93553951ca1e3e11e"
    },
    "discordUserId": "804763994808123403",
    "address": "0x9f50183812bf7dad0967e6cb42aa041919c13026",
    "createdAt": {
        "$date": "2023-07-25T15:14:01.671Z"
    },
    "updatedAt": {
        "$date": "2023-07-25T15:14:01.671Z"
    }
},{
    "_id": {
        "$oid": "64bff1783553951ca1e3e12c"
    },
    "discordUserId": "843995084022480936",
    "address": "0xe66b290105f73dd5f38b25c7d4c86d2c5e5a37be",
    "createdAt": {
        "$date": "2023-07-25T15:59:52.913Z"
    },
    "updatedAt": {
        "$date": "2023-07-25T15:59:52.913Z"
    }
},{
    "_id": {
        "$oid": "64c06ffa3553951ca1e3e13d"
    },
    "discordUserId": "909638900455190638",
    "address": "0xfe496c70563a078d8f6915a67ee0824e022be9b2",
    "createdAt": {
        "$date": "2023-07-26T00:59:38.409Z"
    },
    "updatedAt": {
        "$date": "2023-07-26T00:59:38.409Z"
    }
},{
    "_id": {
        "$oid": "64c113243553951ca1e3e144"
    },
    "discordUserId": "778819861400125480",
    "address": "0x07023c87471184ea2e837037ed6778999173276a",
    "createdAt": {
        "$date": "2023-07-26T12:35:48.124Z"
    },
    "updatedAt": {
        "$date": "2023-07-26T12:35:48.124Z"
    }
},{
    "_id": {
        "$oid": "64c131c43553951ca1e3e14a"
    },
    "discordUserId": "400077081607798787",
    "address": "0xf1d968251fc105da8c42945beaa0af7486340af1",
    "createdAt": {
        "$date": "2023-07-26T14:46:28.899Z"
    },
    "updatedAt": {
        "$date": "2023-07-26T14:46:28.899Z"
    }
},{
    "_id": {
        "$oid": "64c1481e3553951ca1e3e15a"
    },
    "discordUserId": "266924002956541952",
    "address": "0xbba2379f5cc9a2f248c5cf18ad72379ae2478f42",
    "createdAt": {
        "$date": "2023-07-26T16:21:50.415Z"
    },
    "updatedAt": {
        "$date": "2023-07-26T16:21:50.415Z"
    }
},{
    "_id": {
        "$oid": "64c177c93553951ca1e3e161"
    },
    "discordUserId": "806067340319129631",
    "address": "0x104750be1dfd7c2f0caf4009354427ecc0aa139e",
    "createdAt": {
        "$date": "2023-07-26T19:45:13.870Z"
    },
    "updatedAt": {
        "$date": "2023-07-26T19:45:13.870Z"
    }
},{
    "_id": {
        "$oid": "64c1f8923553951ca1e3e168"
    },
    "discordUserId": "918130650475794482",
    "address": "0x9aae12dd452f78ae8919c2168717e7348392ad11",
    "createdAt": {
        "$date": "2023-07-27T04:54:42.460Z"
    },
    "updatedAt": {
        "$date": "2023-07-27T04:54:42.460Z"
    }
},{
    "_id": {
        "$oid": "64c2299a3553951ca1e3e16f"
    },
    "discordUserId": "850382564463870023",
    "address": "0xbf68f1ce39ed3bd9b20944260aa678bb934d164b",
    "createdAt": {
        "$date": "2023-07-27T08:23:54.998Z"
    },
    "updatedAt": {
        "$date": "2023-07-27T08:23:54.998Z"
    }
},{
    "_id": {
        "$oid": "64c50e4d3553951ca1e3e17f"
    },
    "discordUserId": "826895397631819796",
    "address": "0xddc9b3886d7bf6b8ec6886bfbb38aa381ba47e09",
    "createdAt": {
        "$date": "2023-07-29T13:04:13.991Z"
    },
    "updatedAt": {
        "$date": "2023-07-29T13:04:13.991Z"
    }
},{
    "_id": {
        "$oid": "64c720ec3553951ca1e3e18d"
    },
    "discordUserId": "411316003885154325",
    "address": "0x85312d6a50928f3ffc7a192444601e6e04a428a2",
    "createdAt": {
        "$date": "2023-07-31T02:48:12.573Z"
    },
    "updatedAt": {
        "$date": "2023-07-31T02:48:12.573Z"
    }
},{
    "_id": {
        "$oid": "64c7e2363553951ca1e3e194"
    },
    "discordUserId": "920738506458947614",
    "address": "0x7ce3e44f1c02d35e530c03fcff19de23f15ae60c",
    "createdAt": {
        "$date": "2023-07-31T16:32:54.544Z"
    },
    "updatedAt": {
        "$date": "2023-07-31T16:32:54.544Z"
    }
},{
    "_id": {
        "$oid": "64c7ea8c3553951ca1e3e19d"
    },
    "discordUserId": "809792461656293398",
    "address": "0x6e4996cb18e2619dec2c32841981cca3001eaf54",
    "createdAt": {
        "$date": "2023-07-31T17:08:28.308Z"
    },
    "updatedAt": {
        "$date": "2023-07-31T17:08:28.308Z"
    }
},{
    "_id": {
        "$oid": "64c8be783553951ca1e3e1aa"
    },
    "discordUserId": "902855338766786620",
    "address": "0x14bfc91c2e2a9db6263384cae8d36f68b2141e6e",
    "createdAt": {
        "$date": "2023-08-01T08:12:40.414Z"
    },
    "updatedAt": {
        "$date": "2023-08-01T08:12:40.414Z"
    }
},{
    "_id": {
        "$oid": "64cfb2d9c249d06b357b994b"
    },
    "discordUserId": "566263803705294854",
    "address": "0xf59e34f7296a04c55230df15d7122bdea2a4ddff",
    "createdAt": {
        "$date": "2023-08-06T14:48:57.964Z"
    },
    "updatedAt": {
        "$date": "2023-08-06T14:48:57.964Z"
    }
},{
    "_id": {
        "$oid": "64cfb3a6c249d06b357b9950"
    },
    "discordUserId": "964036655692529674",
    "address": "0xc7d47af934f75209377942dda47a1ffd83ff3a36",
    "createdAt": {
        "$date": "2023-08-06T14:52:22.768Z"
    },
    "updatedAt": {
        "$date": "2023-08-06T14:52:22.768Z"
    }
},{
    "_id": {
        "$oid": "64d036f9c249d06b357b9961"
    },
    "discordUserId": "588490102947446788",
    "address": "0x09bac567d73e8bc701a900d14c90c06644ea0156",
    "createdAt": {
        "$date": "2023-08-07T00:12:41.157Z"
    },
    "updatedAt": {
        "$date": "2023-08-07T00:12:41.157Z"
    }
},{
    "_id": {
        "$oid": "64d0b9e3c249d06b357b9971"
    },
    "discordUserId": "362336439800692738",
    "address": "0x44bd6fd314dd5aae5100f7a9932575207fbc3bd2",
    "createdAt": {
        "$date": "2023-08-07T09:31:15.568Z"
    },
    "updatedAt": {
        "$date": "2023-08-07T09:31:15.568Z"
    }
},{
    "_id": {
        "$oid": "64d14f45c249d06b357b9979"
    },
    "discordUserId": "624052006717227030",
    "address": "0x3caec1b35c38fde81b58f4beef61472daf3b8f68",
    "createdAt": {
        "$date": "2023-08-07T20:08:37.906Z"
    },
    "updatedAt": {
        "$date": "2023-08-07T20:08:37.906Z"
    }
},{
    "_id": {
        "$oid": "64d154afc249d06b357b9980"
    },
    "discordUserId": "693115513617907744",
    "address": "0xc0de62487f78176a74d3c59c470cedaf24fcb543",
    "createdAt": {
        "$date": "2023-08-07T20:31:43.117Z"
    },
    "updatedAt": {
        "$date": "2023-08-07T20:31:43.117Z"
    }
},{
    "_id": {
        "$oid": "64d264f6c249d06b357b9987"
    },
    "discordUserId": "850037745610653737",
    "address": "0xde1d5bd2c0520fbaa844be002a646c657a39f66a",
    "createdAt": {
        "$date": "2023-08-08T15:53:26.842Z"
    },
    "updatedAt": {
        "$date": "2023-08-08T15:53:26.842Z"
    }
},{
    "_id": {
        "$oid": "64d29fa0c249d06b357b9995"
    },
    "discordUserId": "917774959852523541",
    "address": "0x116a75fbfc55c26bb98e18ff7d1a13f1ad672847",
    "createdAt": {
        "$date": "2023-08-08T20:03:44.553Z"
    },
    "updatedAt": {
        "$date": "2023-08-08T20:03:44.553Z"
    }
},{
    "_id": {
        "$oid": "64d2b292c249d06b357b999c"
    },
    "discordUserId": "347410201135284226",
    "address": "0x4564d6d107a19d3ab3d734a7bae61eb63dc3d30f",
    "createdAt": {
        "$date": "2023-08-08T21:24:34.670Z"
    },
    "updatedAt": {
        "$date": "2023-08-08T21:24:34.670Z"
    }
},{
    "_id": {
        "$oid": "64d4bb941f25d19ff77e5091"
    },
    "discordUserId": "892276475045249064",
    "address": "0xa8470d7e5052f64f87db7e5d40ca660cfe339531",
    "createdAt": {
        "$date": "2023-08-10T10:27:32.744Z"
    },
    "updatedAt": {
        "$date": "2023-08-10T10:27:32.744Z"
    }
},{
    "_id": {
        "$oid": "64d4e8c41f25d19ff77e5218"
    },
    "discordUserId": "856167550006198293",
    "address": "0x6a429aade86ead247e47d0a24a0e0acad47822c0",
    "createdAt": {
        "$date": "2023-08-10T13:40:20.511Z"
    },
    "updatedAt": {
        "$date": "2023-08-10T13:40:20.511Z"
    }
},{
    "_id": {
        "$oid": "64d8a70e1f25d19ff77e7217"
    },
    "discordUserId": "814424779138007080",
    "address": "0x3dc56e85283ca780d5fbda7337b6bc98a5e4f22f",
    "createdAt": {
        "$date": "2023-08-13T09:49:02.700Z"
    },
    "updatedAt": {
        "$date": "2023-08-13T09:49:02.700Z"
    }
},{
    "_id": {
        "$oid": "64d9d28a1f25d19ff77e7c19"
    },
    "discordUserId": "908458815962378250",
    "address": "0x5df5483b14a077429956c86801fcdf90579d3f98",
    "createdAt": {
        "$date": "2023-08-14T07:06:50.015Z"
    },
    "updatedAt": {
        "$date": "2023-08-14T07:06:50.015Z"
    }
},{
    "_id": {
        "$oid": "64db14221f25d19ff77e86d8"
    },
    "discordUserId": "1140885331927900170",
    "address": "0x5999498c4eedba03a6d9dd8b52da5470d807d921",
    "createdAt": {
        "$date": "2023-08-15T05:58:58.386Z"
    },
    "updatedAt": {
        "$date": "2023-08-15T05:58:58.386Z"
    }
},{
    "_id": {
        "$oid": "64dd72d41f25d19ff77e9b1d"
    },
    "discordUserId": "186234976495206400",
    "address": "0xbe7dd82facd47d3598803f44cb980078466aeba3",
    "createdAt": {
        "$date": "2023-08-17T01:07:32.283Z"
    },
    "updatedAt": {
        "$date": "2023-08-17T01:07:32.283Z"
    }
}];
