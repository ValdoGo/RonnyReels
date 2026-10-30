// Authentic DramaWave / FreeReels CDN Streams & Dramas
// Extracted directly via FreeReels AES-128-CBC protocol from api.mydramawave.com

export interface AuthenticDrama {
  key: string;
  title: string;
  cover: string;
  stream: string;
  duration: number;
  subtitles: {
    language: string;
    display_name: string;
    subtitle: string;
    type?: string;
    vtt?: string;
    [key: string]: any;
  }[];
  episodesCount: number;
}

export const AUTHENTIC_FREEREELS_DRAMAS: AuthenticDrama[] = [
  {
    "key": "x17TnJCnBJ",
    "title": "The Genius Heiress Mage Is Back",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA4NDE4NTc0MjEyODgxNjEyOA==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/e7c5c2d9-52a9-4c92-95de-d5231d5fedba/h264-13ed5235-e4c3-4e2f-858f-bf59ff83e9e2.m3u8",
    "duration": 127,
    "subtitles": [
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/8c220240-5d5d-49f3-8bcb-ea83ddce0c6e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_f7638cdf77e8c620557fd53f759f6e2d.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22791/2238907e-450f-4603-af79-3250f5cb2077.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_0646d8b56264002be012b9fb11862a93.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/b8e36fe6-e5f3-425d-b663-209cc14ba2bb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_802d4674e4c92ff92211c9b5bba2d9de.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/f1913e3f-1997-4389-a3f2-0c78e969c2df.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22791/1_ad23a8d62a69e48584502a45e2228298.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/0e6e748c-d6af-49ff-aa7d-b7e8869122ea.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_491acf68c9d7fc7ba97a6299d797d4d8.vtt",
        "display_name": "English"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/695b8556-8ca4-4628-80c0-609aba372160.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_f25f1616c85c83fa888550beedb90852.vtt",
        "display_name": "Polish"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/32446e3d-1e24-4028-b61f-f12ef4478abb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_ff5893f7a8a090de69972ebd16abd2c7.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/6b83c65f-a112-4227-9829-8f036ae5c8f3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_d356ea176b6c572d45d05ab271732218.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/52b39570-60a0-4945-bbef-65db1f101999.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_7e59253fbdaef0d66fee2ee1a8b653e1.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/180e6a94-9ed6-42f1-8a3f-1c7ce663e452.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_8d0dadbc8a0d9933442b240dbefb8424.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/b906121b-af4b-4dd5-8b8a-206be3ef9f5b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_729fe487aadf641d8f29d04687211711.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/9178afbe-0581-495a-9227-970e88f01450.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_b1592083f1bf02d538798c2d109f1d03.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/ec935511-52ed-45bd-8ac0-bd4c78a97e2e.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22791/1_72686cd28e9ccd86936ca0abf65d1a7b.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/945bd9ec-f761-49a1-89c5-29473a4bc90c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_316ec5b1ef768cca7e0c28dfbfd1d3b1.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/76ac6740-4927-452c-9afd-150e40eddfbe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_6e16bd4d7029d84118337db1f890ccbb.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/160b4c4e-a381-4ac5-8784-9ae62f0418b9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_c3b12f76dd055bbbe765a9a6e4e429dc.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/33797392-6485-4096-9e45-b88e290145b0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_b4d35c438b3566f48133532ee68c77b3.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22791/a4aac1a0-46c8-470c-b8d9-5ec38072a7c4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_3a07621a0467d5f4626af50deb4d7880.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/742888cc-4319-495f-90dc-db75550961d3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_d509dd0063cecbf48aa63094c8ccf609.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/60020861-8ff7-480f-ba4b-1dd3fc0d11b4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_04b0c8ada239fec8e3ae0bf5d12b52fe.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/314f4818-6597-4955-8a13-2ff78edc867d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_9192ce24d6bc62a0baa67f84287e2bcb.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/45690c79-396a-42b3-9ccc-bb1bb966b452.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_299e9dca91cd0a1373dc4dbcdcbd8de4.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22791/8ec8554d-f730-4a5a-89f9-1fbe7257b6cb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_7766e2b777a4b70f74a4a5a3f001efef.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22791/6ee8af30-40cf-4d6b-9454-0b0f52c2698f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_3f4b6c2a3a6883e70bca2144c31816d4.vtt",
        "display_name": "Greek"
      },
      {
        "language": "nl-NL",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22791/ea94c57b-9c29-44cb-81ec-647c487af4f7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_ab3eb8ae-08c2-4c08-8c5f-1b4ebece0b85.vtt",
        "display_name": "Dutch"
      },
      {
        "language": "sv-SE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/5bb8599c-893d-456f-9efd-89fd7b83b020.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22791/1_9ff51c41-fd15-407a-823b-c4bb72f30592.vtt",
        "display_name": "Swedish"
      },
      {
        "language": "da-DK",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22791/c9f64d1d1f05566eb4b2a0381b00935f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_3345367b-f5d0-45de-88ab-7180f28cfec5.vtt",
        "display_name": "Danish"
      },
      {
        "language": "nb-NO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/b5649240-b00d-409c-83e5-ebd71e2a3530.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_5a7dd76c-1a47-4869-aa54-6b114a8ebbd8.vtt",
        "display_name": "Norwegian"
      },
      {
        "language": "hu-HU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/22791/88fc9c99e7146350fbd96c529a04d369.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_4d53cf34-825f-414f-9d06-915bd2609d78.vtt",
        "display_name": "Hungarian"
      },
      {
        "language": "uk-UA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22791/f9a69d80-723e-48ce-bad7-d8d81a596189.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_f20e0175-fe3b-4b56-a4a4-4b2c9d540982.vtt",
        "display_name": "Ukrainian"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22791/a6a964c3-d24d-4921-9c2d-29649599f9bf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22791/1_40ab8508ad062d942cc3f3add9068a15.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "P4iJoLoEg9",
    "title": "I Hired a Killer to Be My Dad",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA5ODA3NDY5NzY4NDEyMzY0OA==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/d918fb90-944c-4c51-a734-a17e108a0d87/h264-5415a678-26c6-4f50-970e-121042261f4a.m3u8",
    "duration": 194,
    "subtitles": [
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/9d8caa16-3bc9-43bf-8e35-ed71525b9535.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_f23fedc172a780ed90956f49b82a6fa0.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/5861ae7d-2a8a-4407-b4bd-3120324e50c1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_083278eea9b1342f2b11054fd03cf981.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/0a1b869b-6109-4a42-b63a-3f325e57fb26.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_bd24e9bf8a15ea053a43848a84b97e0e.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/8ccf0e4e-db86-4c64-9052-ec27e08fe647.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_aeffb8b0575b5e2855e6a4623b841316.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_6569b607-2c1c-48b0-907e-b133d15fc142.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_8bfd9129af5fc3794d8d98db1f45fdd4.vtt",
        "display_name": "English"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_1947793c-48bc-40de-910a-f0645a133d39.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/25102/1_40e9b30e-b3a9-48f9-91c5-4478e885d631.vtt",
        "display_name": "Polish"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_ea61168b-88f8-492b-8eaa-b4fe47d6d479.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_21e613bf632a6652a773dae0905d4380.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_ead33098-ccf5-4ddc-a8bb-c231992ce924.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_84d8db08-d7b3-4633-9a23-10f254689702.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_cf8285a5-7bc1-416b-9a9d-6a0b771df8d8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_30add6b5-20ef-48d9-bcc8-c13a6258eb31.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_6f3504de-c2cf-4fd5-8255-b61df46fe25c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_ec1063dd444ef3bd11df46ce4f8d4c1a.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_57f1c131-33ba-4669-8a22-783728dea620.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_b57c0dd29b50c092c493604bf05560f5.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_87590119-465c-4e56-a993-6739a47346e3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_61a7329f84f2da485020164dd94c607d.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_1b2a22f3-7068-4ff3-9406-043790b852db.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_a895b1dd-b432-46d7-986b-3b3f1c31a723.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_b8b08855-7d1d-41f1-a43b-cc8138f571d9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_51a22e68062700f95ab8035a2ca006a0.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_c9aab662-6a31-454f-a89e-b698adcfc7ae.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_788336b8-85d1-4a7b-b6d5-494ba1a91123.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_b1d85ed0-5a4e-4a0d-a5e8-7fdc4aafa5c7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_5a0d35a4-dce0-4228-81db-cf5c1340fc75.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_b8f7e784-fbac-4fce-93ac-100a48c33cfd.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_89266e332919fc9b6483d7f903fc705e.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_320c15da-406c-4a48-994e-c95449013569.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_e77270bd-7e14-41bb-8294-9bbba752bfd3.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_c8571135-aab9-4ef9-a27e-49f527cf0240.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_d855569c-f8e3-4378-a6b9-5330f802fbcb.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_19b06945-45c1-4be7-8bc5-719e75947d7b.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/25102/1_310ed91e-ea41-4195-8851-4bc283ee482f.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/25102/1_b3976a1b-d00e-47d0-ac81-e55ba92f3828.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_cda4f584-2d2e-4070-99d9-3c0b63a00f82.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/5b5acd6b-70aa-4425-b7fc-9c7718d2b93b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_8b4ce78440cd77e8b9b761b9d27ad856.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_a5887bf1-7c4b-468e-aebd-5f2c61cf0e61.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_9d856610-b511-419d-8895-4283b800c7f6.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/25102/1_4e09613e-7294-4268-885e-a57b8f44cd73.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_f721936b-35bb-4e3e-98cf-192848ebdbb8.vtt",
        "display_name": "Greek"
      },
      {
        "language": "nl-NL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/de7d78f0-c994-4678-a696-c45f2bf98a9c.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/25102/1_090fe14503be50cda3c15df1c7abb0e3.vtt",
        "display_name": "Dutch"
      },
      {
        "language": "sv-SE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/8955acb7-ad7d-45f4-910e-30929c553928.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_6bbac8d43cf2145e4457c89fa5d1c860.vtt",
        "display_name": "Swedish"
      },
      {
        "language": "da-DK",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/1670df58-adba-4cb3-ae54-4e7b98cfb0ba.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_d00b6086f04de411ced3719c97409f81.vtt",
        "display_name": "Danish"
      },
      {
        "language": "nb-NO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/cfa3e259-24a4-4a9f-b9d7-2c1acf7794af.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_6a8018baab71b6d10e8d83d47e8a8c1d.vtt",
        "display_name": "Norwegian"
      },
      {
        "language": "hu-HU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/3b83cd9d-3085-490c-bf87-761bc3c2c7aa.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/25102/1_b9e3ad703b265c8fba1f69508dce3e79.vtt",
        "display_name": "Hungarian"
      },
      {
        "language": "uk-UA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/5083b00d-8f94-4ece-b184-4380eb4342f1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_ab9e836ff2f1e49e1b22146f127a974f.vtt",
        "display_name": "Ukrainian"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/25102/3a48a0c2-89f9-4b8a-ac8d-087df8c3c40b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/25102/1_d1165607cbcb585b454ab860efa83f2e.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 32
  },
  {
    "key": "la8W42zB3x",
    "title": "I Married Wall Street's Most Wanted",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA0OTMyMDgyNzE1MTE2NzQ4OA==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/ec536ce7-260a-41f0-bc8b-81520f63ed24/h264-baa0ba6f-0fe4-4924-9c2b-b2fedc480876.m3u8",
    "duration": 86,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/263d6a25-b467-4b5a-9225-e0422024e8db.srt",
        "vtt": "https://video-v6.mydramawave.com/vt/20691/fcde37f8-336d-48da-a199-8068ba7466b4.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/5f9199a4-a754-453e-8642-95423931da89.srt",
        "vtt": "https://video-v6.mydramawave.com/vt/20691/a41bef5c-9260-416a-aa08-46c90ad2591b.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/59d58410-f608-4be5-a1bd-d72a239628e7.srt",
        "vtt": "https://video-v6.mydramawave.com/vt/20691/9c893e07-41dd-430e-b928-26a2623a5a4a.vtt",
        "display_name": "Czech"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/20691/1_2789abf9-bb0a-4308-bdde-01d30a6e85d8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_8a8ab568-8141-42ad-8fda-f74b41110167.vtt",
        "display_name": "English"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/dfd5b8dd-dad1-4ebb-b6ed-57e8c81726fc.srt",
        "vtt": "https://video-v6.mydramawave.com/vt/20691/44698388-f3f5-4abe-b70e-9c61339ba82a.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/20691/5960a750-93c6-482e-944d-a9137ae7b47a.srt",
        "vtt": "https://video-v6.mydramawave.com/vt/20691/54269e33-af72-4a01-ae54-7eda3c3b0a21.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20691/1_27f72440-06c4-420b-a070-82122b9960f4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_9a7c7a1a30ebeeb5c106d0cc9bdc814c.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/9832366d-da72-4d4d-9629-3ee79af93339.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_5fc58051-87af-4348-bacb-524888d8c4d5.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/ec6d9ffb-5de4-48b5-af47-f866a0cbe15f.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/20691/1_1ab5fe45-c9ad-4254-b48b-9dd2f2852ec1.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/20691/44ccc622-1f6b-4720-be13-c35963d9c14a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_f393983a-3e5f-4b48-9cb3-402b255a0897.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/c1b7551a-5a9a-40e8-9410-20a9cd48b128.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_32b2efba-2e80-4a1a-aed6-1ecdac50c38a.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/52675718-a341-45f4-a786-4de0d130bf44.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_9475ad5d-b72f-42db-be33-fd0857e8ae11.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/1e5e511f-0600-4c64-b433-2623632ae513.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_0e919fea-147d-44a8-9f75-ca9dec1c090e.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/4fd0766e-66c2-4951-995b-4edc2f8508f5.srt",
        "vtt": "https://video-v1.mydramawave.com/vt/20691/49d2df3c-2af1-4b00-96ad-c6640dc80ec2.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/354f7d6e-53d6-4d9f-a9d9-c1f685fa6d6f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_115949b9-1f3d-4837-99d4-0d1466a89d39.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/183ec8f2-0711-426e-af61-4349e4bc828d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_f6b10756-95af-4e29-8303-a1c6d85b6f79.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/a0820fde-4076-4f60-93d6-d356868fb32b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_35aa7c92-4f9b-46a9-823e-e9fe4764110e.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/240c3a5b-1b74-485e-9f58-9aeff505b09e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_6a5d89df-83f1-4293-b72d-631838ab0bf3.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/bb53374b-05e0-49f9-81ff-5a779186a090.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_e3c1ada7-c62c-4087-be94-ab77680e0722.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20691/1_a2f03901-dd7c-49f1-b4fb-ed79092d40bf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_68bfa5b45e009af649367e06eac2d56c.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20691/1_af190c8f-5ddb-4d8c-b1f7-7a4164b29f74.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_41eae9c8-b8ef-45ad-a458-8ebcbb887071.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/70fa7108-ba4d-40bb-ac45-9cdcc777bda0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_da8cc7f8-2f6b-42a8-aec4-74036ae7249a.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20691/02e91266-8579-436b-8d84-c2e9d27fb640.srt",
        "vtt": "https://video-v1.mydramawave.com/vt/20691/62f5654a-77b3-48d0-9a29-6752a7f33ee7.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20691/1_971fcf23-b724-4b7e-ad51-5ea58f3848b1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20691/1_17b37d92-beb5-4e25-ada2-4dd6bbaceb74.vtt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 35
  },
  {
    "key": "6TImVSgGtB",
    "title": "Never Break a Queen's Heart: Season 2",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA1Mzg0MDk5NTg2NDc4NDg5Ng==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/6c0bc978-9861-48d0-9860-109973a10fed/h264-dd0b37f1-79d5-4c8b-b64e-2f46070fe96c.m3u8",
    "duration": 122,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/7d4b8af2-8771-4b2c-ac43-42679fff9fdc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_44d7925b-560c-4182-8516-4477e76b6492.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/ad521a2d-0bbd-4ee3-85b2-39433a617a8f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_f574983f-1abc-4c94-9445-7bbd246155aa.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/8bd3d89d-9831-43b7-a52c-338d8939bb71.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_2e2ceae8-d5f5-4af9-80e9-8442578f9997.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/20763/1_3589b6c5-acf0-47fa-8e74-65d5aa5ec445.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_4761d401-39a8-4ae2-9a63-df0685738f7e.vtt",
        "display_name": "English"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/a132387b-cbbb-4595-ad7e-43f8dc259144.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_4879e128-2dfb-41c9-9567-440180d911a4.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/cd5e4052-35b0-4c7a-b259-e21a93decce5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_e9983202-3cb7-45c5-8c8c-4160d4ba7474.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/89c28ec8-5db8-4d68-997f-97075276fdd1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_480973a4-4f98-425f-a0e9-cd0bcd9d4572.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/8eb379d0-712f-4be1-889e-8c16a00ecb43.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_8fe88846-b73e-4b9b-b7bb-bf28928c1f08.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/fd45582b-7ce5-4cca-b8ce-bb5559dd989f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_bb1fdeaa-f29a-4380-9e07-aab34b03ff35.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/06d68b4f-6736-48c1-ac7d-31463cc4fb7e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_809ee546-2365-4f3a-a44e-ed413e6d26a4.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/c4e51fdd-fc86-421f-8b29-cff70c129488.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_be43a426-2093-4603-957b-44514e1185ff.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/daaddead-5b27-41e7-90aa-0921688f91e2.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/20763/1_518accd1-f30f-4bbe-9f31-a248d2bb1392.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/f4ff3c94-56a1-4aaf-b3c7-0e69da387d05.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_8e231684-d0f3-4167-94e6-92da0877d6cb.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/b4c430b4-d3b9-4a2c-8633-7e2e101ca0d4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_dea34361-164f-4976-888f-79296c5270e4.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20763/1_f11f5fa8-7da5-42c8-b404-36832415d294.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/20763/1_2ea843dd-b367-4620-b90d-f9a8a0f4537e.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/b4d0b3fc-3157-4432-9d58-8320738bb1cd.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_ba105eb3-5d18-4d11-ba42-69d9cf550acc.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/16881c6d-73d8-4bfb-ae52-9e3c8b235e0a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_ddce5a99-fd04-4037-9589-6e89f7a4ef47.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20763/1_61de8437-36cc-49d5-baa6-afd63c4ebb3c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_f92e9b0a-248d-49b5-b340-cd97053a2084.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20763/1_0f8b3488-b108-4e17-8999-a64d9fdef85b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_fc9ad947-286a-4b10-8dd8-30566d4a9312.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/20763/f3894dc8-575f-4ce6-9298-6b66a13b3bf7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_b53c2650-3d12-4cd2-8d55-3280b47412de.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/3345fdb0-8086-4567-bfe1-5832c539aebb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_e74ad494-c04e-42ae-8266-d44ae71bba86.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/d700e97d-51f4-416f-8839-946dfdc853bc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_ba2def5b-b919-4207-a29f-b1064a6f8754.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/f0cc0e33-59fa-488f-aff0-5469b6210fe9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_69472f62-9f95-40f7-a856-e4013899a5e5.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20763/4789c156-75c6-4b26-a5eb-feaa89027511.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20763/1_399bc202-4654-40a1-a782-da5e24cd5291.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "q3eG1ND3Vd",
    "title": "The Amazing Mr. and Mrs. Bennett",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA2MjA5NTE5MjU5NDgyMTEyMA==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/70ce20e3-7c28-44c4-b9b8-7c33181e4a83/h264-d22b5a6a-104d-45ef-be15-df7192eb44db.m3u8",
    "duration": 117,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_dc7644ac-6b09-412f-979b-50cb2d638763.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_b7ba0df0-e512-410d-8222-2ec72745ae08.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21194/2a23c125-d6bc-4e3c-b4b7-8b790ab7460f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_f1fe5f21-496f-4cd0-a1dd-c0bc68bff5ff.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_37d8c905-08e5-4001-8c7d-47c9ed7134ef.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_d3b61dec-a59a-4091-adf6-a078640a644f.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21194/25287078-c81c-4a36-b1be-b35d37627586.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_e957c1b3-600d-46d9-977c-989737008b1d.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21194/47ff7908-13fa-42f2-b52f-1a24429df1c6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_52560782-2d78-44b3-9133-13e0c0dc6c1b.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_dcd0edb3-2450-42ba-b42d-6c1933280e67.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21194/1_1516144d93e5766232efee5c76c21b82.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21194/1_2d1dd6ac-6b85-4eed-8ccf-14a3c9340abf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_164bc210-1009-4c0b-8f75-639166b6f5b7.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_a86ad71c-8398-44a2-8b00-cd09eef8e0cf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_97f6911b-3218-43ea-b18c-eb8df5c18d49.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_42a79a57-6317-434d-9c32-0d68cc523e1f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_2f23513e-a9f9-45be-b2c6-4d11a22a687f.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_e682c98b-5577-45fb-a7ac-b8a8b9978caf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_5dd5031d-f166-4860-b55f-e90c4b318033.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_6e915dbe-f0b1-4069-9093-b6ed1fbbf982.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_4738f159-d219-4a29-bae9-1be4d29f804e.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21194/1_b6b3dd7e-6c15-4004-ae61-dd5b863fafb3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_a4621fc6-d3d8-465c-a08b-5cb79d27944a.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_59d42bec-6d3b-447d-b880-cf4954263a76.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_319b1bac-2219-428f-89f2-0faedf258054.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_cd69a8d2-0045-477c-ad9a-1d57abaab799.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_253a9d8d-bcd2-446d-b7f9-53003950cc55.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_77f80730-96d7-4e73-ab7e-7407781d62ac.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_e6946028-d00d-4166-86f9-38d5a4e7366d.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_addd7183-6292-43ed-b5d6-e512da4ad0c6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_fa877c3e-9990-4c2c-aab8-f6629a80fe62.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_507ae0af-5274-48af-ac9e-3e33353d5977.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_ea3a26b8-7f34-455d-af8e-68ad09d4df40.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21194/1_af8aca6c-6213-4f5c-8a61-f15c738d86c2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_201cb375-a9dc-426f-b61b-1d9a71eb78a8.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_43733e29-aa9b-46c5-979b-90938a7216ae.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_6680a536-43e1-4111-9185-db9f8087ae3c.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_6eb1e9da-adcf-406e-9d40-0e5962d29d59.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_8c0c5d62-ba5c-48d4-b6b1-decdcef637d0.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21194/22b09534-fba7-4421-8e23-11af5e30b958.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_028eeed5-6cc5-431f-aad4-ca98f218a5b1.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_280b8ed4-c399-4f33-ab7b-5723c5834ae8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_dc2d7313-e15d-4c26-a162-bb57d3a401be.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21194/04fc5095-502a-4626-aafc-beea87243116.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_4e935b37-59b4-4bcb-acb5-b4b872c764a8.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21194/1_09208a73-dc12-4dc5-b214-5ec1476b5bb1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_9cf9ae99-b338-42ad-85c5-859d2ab01e21.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21194/4e8de83b-364e-4448-b97f-a53fced74cf3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21194/1_a2ee892e-9de7-4332-aa18-22a9aae76b9e.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 35
  },
  {
    "key": "XxEwoBC3PP",
    "title": "The 200-Pound Princess Wants a Divorce",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA2MjQ2MTYyNTI1ODQ1NTA0MA==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/bbb26781-32f5-419b-be77-cc5afd7b5739/h264-8aebb829-5381-4873-9c91-a15500bc1ab5.m3u8",
    "duration": 172,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_4e1b6365-3d0b-4d2b-bb94-1280a0e3d62f.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21236/1_ade1df621d0722e3a47f5423ea4d8c8d.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21236/237177cd-3af8-40f8-b99c-2e51eadfe181.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_7bcedb0590069c2f0e4a50aca9e5b0c8.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21236/40f802fb-3b5a-4253-9125-e218746d995b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_4fa54fc0514a0ef81a5769332fe4833f.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21236/7678d4b5-9aa2-4c52-b569-fe8372ee6bff.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_4593cd14a38f54b5cbb602ff5cdc33a1.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21236/b665d8ad-1dd4-4ec9-978b-1bb5f9db2203.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_92acdc07ab9545c137492f065a591e11.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_38b227ce-a95d-4f57-9362-0f15ec1a0f17.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_a8aecd22dc5ae2746ca2da49c1aaae85.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21236/07fafd12-f5d7-4fe8-b9bd-03cfc8e9a338.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_3bc5ffa9a9a1ddc3179f620f96cc134d.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_bc9ab5b7-dbcf-4234-91a2-8181c4241250.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_db5eca6674e21805dcbb5e16d65effb1.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21236/47aec10a-149d-4eb4-9680-8ac51fe3ba4f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_ac62373e5e1db573ad0ba45bdb3950c3.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21236/1_4e657520-c1e0-4704-abcb-c846f648daa2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_2310f8fd00927cd6be88f4626f01596a.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_73ce36c7-d5af-4674-ac64-3c26b480ca63.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_7f966863b0a5c37ae4d249a21910e5b4.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_035a922c-4868-4a00-8643-a7d5d80e5def.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_12793973647550766cd8d46a168763b6.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_f146e0f9-2a38-4cd4-a352-fbff945064ec.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_33a6d55c5056bd7af04168dd1a3f3f26.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_75ab8c9a-83bd-4d99-b390-8a6bcca36978.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_16ce04fa4d9f27b6095aacc1cdd88828.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_8270a681-b4fb-40e7-a7e1-811cb2d2a483.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_76257d786f0ca3f3daa4284b667df382.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_134a05c2-135c-4235-8aac-eb7de292c4f3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_d8c63a4c93fd054e1b6e335c4fa2c417.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_bd022086-56f0-4728-b675-061268a1cfd7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_c23a4c6893b650e7490b55c845cf4840.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21236/1_0cd03375-8ecd-454e-b736-44ec72eb13cb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_8ae1625fdc356187aa7846b431a37092.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21236/1_110a2cc0-e6cf-480a-a694-07e5d8d64b79.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_457220ebd1575323fae217bfb00d385a.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_3753f63d-5f17-4b3a-b808-2bb69df5f603.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21236/1_7c9c528151e6b12a250eb94983cb218c.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21236/66c260bf-9adc-44bb-90e8-6b430c95da5c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_78a20b6633a957773c9b310d8d8de242.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_7bcdcfbb-ab41-4c92-b4c5-ddccb2a8df9c.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21236/1_725ba79b772541dd73fb305902dc2b1a.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21236/b2bd76ff-3031-4c6d-94d6-d5b8a4d08c28.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_f4e9edfbc9c4d2e3bc73d4bcc4f7581a.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21236/1_7f32ebbf-b810-40a5-b213-8337f5549f64.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_29a64eaa9ecbe94af1c824411b8d97a3.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21236/58722d00-845b-4857-8828-213476d11331.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21236/1_2967173731e2b47843a774cc57cc772c.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 20
  },
  {
    "key": "r9h5s52isx",
    "title": "Trapped in the Summer Heat",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA2MTY5NDQ3Mzc0MDY0ODQ0OA==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/c1cc368d-4472-451e-854f-0f885663112d/h264-6eb6f8fb-d3f2-48e3-b433-23b84503609b.m3u8",
    "duration": 83,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_60913771-20c4-4d5f-acbf-6abfea4fe20b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_b59f281411c0e0aabb593fd058e00c6e.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21191/75a71ecd-7711-4211-9d2b-c6d76f189f7e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_3b31b968-38c4-40d7-985c-0b63d87e6fe4.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_a5a9471c-f9c7-4181-bb07-fdcddee33926.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_975bb4db-7e26-4e2f-996a-2e177a2eafb0.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21191/e8770df1-a588-462e-83d3-582427fb79fe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_390628d2-9e6e-42cc-8884-d85b4de2801f.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21191/94707548-f760-4dc5-b58d-27cbad9e5402.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21191/1_5e47f4d2-b0c2-438e-b577-51e81b923c75.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_2122aba1-cf96-43d1-94ea-eb45f2b9218d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_e35df3f69d208aef3f14768f2dcf81b8.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21191/b46443fe-5328-4ae3-9731-2b32d6d3761e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_68e8dbaa-3aa0-4ab8-888e-794fe01ee431.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_d660aa9e-518b-4649-9a0f-544c77148e36.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_90301c14-7828-42d6-a484-6c4512bf7a99.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_17432a1c-2ec9-4f02-8a95-7b9021e2af10.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21191/1_109ca58f-de46-4a0e-af9f-277b83b5895b.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_596c7450-e26d-4e92-b1bb-d423f1c7c5d2.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21191/1_b5e9a5c8-e7a8-4fbb-adcd-6a1b0107b166.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_f0a7d587-4e61-4076-a30c-7d89aa1c4d42.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_b713d72c-d9c8-465a-8754-6e0d5c1b6ec5.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_a14da924-ec27-49fa-86c7-a82deb89647a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_bfa74db6-d4ce-4c3d-8640-a90b3e7b0b4b.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_9516aeae-d851-42ab-ab79-bffa7d267e66.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_15272b7c-b2b4-41fa-9a5b-f39a5358d15e.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_3626c4fe-b171-4a95-aba3-bc43ff4e6d0e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_1a48d376-51e7-4caa-81d1-25caa156daf5.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21191/1_e3aa850e-6b70-48e2-aa9d-b258742ae9de.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_d124f99d-3618-4fee-8063-4df9259ea22d.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_a1f5c3b7-b968-4929-9397-2fc8be9e7e18.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_5e294811-4f90-457a-91d2-89a437669c93.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_6e7322d0-90db-4d5a-8557-ac2c0411259b.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21191/1_fffc76b6-a503-439c-9fa9-be5f15135c62.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_ca0dba02-7407-48ac-9812-b18e427e2bee.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_a24e7f03-718e-4faa-bd7a-f451174408bd.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_2b57fa6e-c275-442b-8cee-bd74b85df518.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_0a52820d-47e4-4367-bf93-c797f8b5c9e9.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_3cc24cb9-5935-4080-872b-701e0fda076e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_cd187131-6fcb-4416-b3f0-b87d27f3c8f1.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21191/b1da47e9-dc3f-4406-958c-d6067de729a7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_b49b69e5-7aff-4af7-b3e2-60506a9369cc.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_18db500d-5388-4a99-bf57-f774ca16e593.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_218447be-45ce-4173-b895-4cf971252bd4.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21191/6e3976fb-4dad-45c6-87a2-839b4953859a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_0d5727fd-9447-4c10-bdf6-742e28bcb5b3.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21191/1_5152dc93-ea6f-4f26-a2e6-5d8971da44a1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_056e33a9-17bd-4492-9695-aedfddc400fb.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21191/654f314d-2301-4a97-9992-a29d9b913ba1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21191/1_f4063e20-698a-4ff7-959e-eda820486b47.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 54
  },
  {
    "key": "axpvadno7n",
    "title": "1965: One Thousand Steps to You",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjA2NTEwMTY5MjIyNjE0MjIwOA==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/adc7fd80-8cde-4138-bb4c-4c8e67e1c801/h264-9381dd7a-66e9-49e7-a4b7-d093cb511ff9.m3u8",
    "duration": 133,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_0534dc03-45cf-4739-b68c-5aa9df09c312.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_a85b1b0523b1d7ba329e04311f22c344.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/a35ec944-6eb0-452c-99dc-29f5553a0638.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_426a5ba9-004a-4244-9fa7-ad43587a5d7d.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/b74df9a6-299c-4727-ad44-0bbdfc8a0841.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21309/1_2c9ca4c5-8e01-4a7f-b444-d6dc04e6a246.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/50b990f1-8534-4c00-87a3-7756ed8a6e4e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_611bb994-94a1-4181-aadc-1b836f6eeca6.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_fac55d05-faa5-4c9e-a8da-6508c25566b5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_7ad59a41-dfbf-4b2d-986a-ed111e52bd9f.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_3641d75a-8248-4ba7-a818-cefa8f854735.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_aa915a84d1db6c40ed3660da45c782f0.vtt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/563ee664-8ae2-4129-a824-62d535e8a873.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_9b1600d4-26f0-4b94-9d06-a79fee23e3cd.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/90bfc95f-a380-4c34-b581-fa6236a33528.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_b47b8369-51cb-4ea7-a5c7-8a72e41e23db.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_5bd84f94-e511-41fe-96c5-843da008032a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_ba86c0f4-9557-4c48-bfea-73578945eaf3.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_af6be2c8-db88-4588-889c-7bdccc11610a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_f0958a28b57d11e45e3c015c5e0ffeec.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_d4b45dab-da4c-44fa-9dc7-3a5ed9a38e10.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_c6dab012-7ce1-4e19-8c34-4ab23aa4feec.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_a79aa300-bca4-4794-bd3d-68d346abda3c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_af77eb8aab6878da453e9489315f9c73.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_003ccc9d-731a-4d74-a2d8-7001d5582374.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_91b0a44f-1105-4abe-843c-a79e504d3f41.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_614373d8-62c5-41c0-ae4a-062d0fdbee3a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_57b30082f87ccc7fb133c8174bc3b0b8.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_a787d775-e5e7-4df0-8dbe-72366508a92c.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21309/1_63c824495b578f5aa3947ec9e907e5e9.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_1c9d416a-ce0f-4526-95b7-f1cf522e76d6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_f01637746b9dafba3a2ce96d657a5ae4.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_d55cb362-d4bd-4be2-bc04-61efae659f18.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_1f360392d4f474d71403fd9a1466951d.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/b750f128-95b0-48ca-8ac6-bda409be4a33.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_4facf289-7c2b-4d80-8fdb-6cf6ba8b831f.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_166597b1-461a-4310-8e14-276b512a2d8c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_1d7b23a3-0e38-4761-8c3d-5d3f8e9f3d81.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/decd22a8-d813-451c-adb9-6c0c2791f101.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_0022c63e-09a8-4be5-b5cc-009af527b73a.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_222229d5-fed2-4215-85cc-e5965891f091.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_939b2146bcff19224d6a678cb663ee7f.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/1cb9e527-4ac5-4ec0-abcd-d3b7208b9989.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21309/1_7050ad10-7d7b-4dde-87c0-3f64e15aa1b1.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21309/1_94998b17-c07a-4079-8e4d-1f02399139db.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_3dba9e0c-bdd2-4fad-9f24-56754d10b564.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/47a8842d-d56c-4958-becd-b8a5b87520df.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_b38c2cb5-c6e9-405d-90dc-78f388851436.vtt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21309/915f2c83-42b2-4448-890d-45645d9981e8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21309/1_f6411778-c1dc-4b30-b371-73213a7a9ad9.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 42
  },
  {
    "key": "kMCVl5H2ev",
    "title": "Runway Rebel",
    "cover": "https://static-v1.mydramawave.com/banner/cover/MjAwOTIxOTQ0MzA2ODQ4MTUzNg==.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/b2c1534d-64e9-46c7-a578-4ac7171e2d56/h264-a1d0d8ec-dd31-443b-afff-40564850900b.m3u8",
    "duration": 94,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/be5567c0-21c0-4085-90e3-c446522a472c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_0283da7f-6414-4c2b-adbb-b0060c522852.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/46620a8a-6c91-4495-998d-6e4f87b86917.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_e8eacf41-3e25-45ef-ac9d-09d43fa4c9db.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/6d0ed6a8-7ace-44cb-b812-cc25cbb6dc3d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_71934b55-8ee3-42e1-82f1-c8f26409e3a7.vtt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/684b9384-9494-4598-a5f5-80a36c82b567.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_6eef1f9d-4249-47d5-b1cc-832da2cc07f8.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/69b0a988-37c3-4741-af67-f2e0a07c10cb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_9c01ce3b-59be-4c1a-9c1a-8eb0e4546c6d.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/16486/c01f002e-a49e-4d5e-b433-19756e6299d3.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/16486/1_ff9d00ac-ad58-4878-8e2a-38cb508caf82.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/84c0de26-784a-4f3a-9d54-94b1b6a616f8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_f47cfd09-ea42-432d-aaf5-df3fa9d095dc.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/c2737f80-acd3-4dca-bb3b-ee228ea522b2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_5c87c452-da2d-4dac-b46b-4f9c47c62103.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/e5dd5c0c-35c7-4801-a129-d4e6f5cf501c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_32292f54-351d-4b41-80b0-5d6e90debe70.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/90645b91-03e3-4430-a6e8-85b2958246e2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_48eac81f-88b2-4f4e-a1d8-3880a6dda854.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/0c0db3e1-a5e8-4162-9611-64c46b5c04f9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_a1fed0eb-3e69-4523-ad3f-e38d6d343530.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/16486/b5cb7bd8-83d7-4116-beb3-a79c838311f3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_068a4428-5e4c-4793-b48c-3915c7e559d0.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/03925e0f-96c6-4945-b688-bddd759cc869.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_3b958f40-baf6-4b63-838c-d271e46c4377.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/2e885ff9-b600-4083-86e4-6ca526e5c0c6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_d7d4f0d1-968b-4041-9bb3-879e3b16a19a.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/05af2a5d-06d6-482c-a473-c5cc55fa0b7e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_e1490776-366b-4590-a238-d731d8c468d2.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/7516abea-56d6-487e-b904-dbc9ae4de979.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_2c991959-1377-4dfd-950f-0809aa71d501.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/c49fd7ef-3d29-4861-abfc-727f6e88a3a7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_26d2a82e-da25-4d41-aed8-3600cfb2c89d.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/f59f3a4a-8eb5-4859-8f17-7a799bfcec08.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_96ffb2c0-e572-47a9-b330-e255be0d5b11.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/d094f722-48b8-48b5-9666-f6d9b1e945b0.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/16486/1_9347300c-7b9a-4c46-a74b-daeb808119e6.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16486/da4103cb-e175-4fc1-91ac-fa8458531b39.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16486/1_1ed7749f-df83-4b6e-bced-e003ef0f808a.vtt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 49
  },
  {
    "key": "eQgd6TNdqQ",
    "title": "Revenge Bride",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/904dabc4-2cf5-48fe-8150-eb56ac451b56.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/a1d8fc7e-7ef0-4960-a071-21a3626f63ca/h264-a6646310-5cde-4b6f-b0fd-503cbfcc3a89.m3u8",
    "duration": 70,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/bcecd737-c35a-4abe-bc9f-46109b60773b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_f55256213592cffc69cf1a0d3e8d71dc.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/ff1e7eaf-8e02-4106-b2aa-e261779ba660.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_b0911a8a8e8308526abd7c4726b06ffb.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/066de207-5948-4a35-9d3a-cbf25bc1735c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_438fef422929a6ef611a1c467a62c048.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/a060cf60-0817-4192-a877-4ea493f05136.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_c8c018c83265050882de5b0fd5f09bdf.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/03e62f3a-9cb3-48d8-bf27-eab29ee9338f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_ab5c50ef7708f38e14a6f01e7895203d.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/3e0ad60b-e67e-43e3-814a-c1ab6be1dd81.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_3b8b65aab5c984a41e1e3e38aef0af92.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/570f3768-4608-44cc-b145-319e7a4800f4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_37df9e26412052cee4495d1e6f5ecf8f.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/ea263d9d-87bd-4df3-85c4-2bdd8b05298d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_d97c28563f2fcbe7cbdf9076872edb9e.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/bb3dfa3a-a357-41be-afb5-fbe0c28c2ef0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_88268d4f716e333ea4cb92e867fffb41.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/24088/cabfcc9e-5c34-466c-9c43-51a180e56909.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_7546cc54b33297b977400235a5a357dc.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/209f5631-0fa7-4d59-abd9-1e56feccd00a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_f1dbfd4fee8d4473aa5711cee802bea9.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/24088/de7a40c6-8ab8-4752-91ee-e9955662f2ab.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_b222304ef65fb9f234065e834c4721ee.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/59416344-7ae0-4be2-84ef-b3f451705340.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_8cbb80f6295a142d99a5106e7058b0db.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/a1152c30-bf68-43ae-baf0-807f3968ca76.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_5ac0fdf5776842e923c3e9d52170374f.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/73fa8c4f-4256-4824-b3bb-a0e72c4f4cfe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_195fc7b55a65ce67096ecc89b88596cc.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/720f7173-c4e4-4ce1-b5e5-094c2dd0f0c2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_65fddaf0183adf9a84dabd3ec46ea09c.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/fec0d078-b592-4e77-a2bd-1b5b9d8a3168.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_2c12a71560fe098d26d9c9b766615f2e.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/bccbd1e3-7786-4d23-af62-2509063185a0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_6600e0fe4299345558b8103ef96f7af6.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/24088/69234db0-0294-44e8-9f9a-3a8ca2105d9a.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/24088/1_71386e7b102abb8a72d22ddc640ad4d1.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/1fb435f6-1b5a-44d4-9cbf-3eef1786e896.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_aa29ef39526f0bc77a943dfa3c73b98c.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/9ed5c5db-99db-4036-adfb-1d2169e5a6fb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_514db547e6bc44e8ba66751c1b31921b.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/3faa833b-b21f-4929-94de-8c6c7be45464.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_a64cefe96006bff63f8b52f6055e8284.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/321e6693-4259-4a33-a131-41a0c6cf77e6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_73615003aebab915f3c65c67deb0e355.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/59f5791b-542e-4192-b7ca-809975dc394e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_3bb32d2224d58c2fc981e92c6ecdf502.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/24088/e6cfd69e-0e89-42cd-a6b5-3f05ae7af43c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/24088/1_ceadb79dc99c160039c9679a4e7d5aca.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "QkoNoRF3og",
    "title": "I’m a Stepmom in a Billionaire Mansion",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/74f351e0-029d-41b5-bbe5-b4a65cfd3e64.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/50864239-cafd-493f-a5de-4b0b8f805b0e/h264-86910941-19ed-40e4-9a7d-7b84abd76d23.m3u8",
    "duration": 107,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/3a87edd7-1e3a-45cc-88b3-e123c01839c1.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/8069c280-058e-4bd7-8e16-0ecfedcfdef2.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27431/a029c424-be61-47ba-857c-855700c4e614.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27431/0566df97-03f6-4cd2-bee2-1f197b752404.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/0d1fe0d7-6183-4969-97f8-32c3359e3900.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/13a03d94-b6f6-437f-b4de-9332e74eedc4.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/2d2aa627-6bd0-438b-849d-ec8d648b1bee.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/2521057c-1351-4d18-aaa9-7dabd017708e.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/9e1c92ee-2fb0-4a7b-bfba-0d2759b7f409.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/5ce06746-0718-418f-a97e-624c60bfa8a3.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/a68d8b32-be99-4605-87b6-a64fff9385e7.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/a01f3fb0-805c-41c3-bd64-3562027283f0.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/441599e8-1f86-4359-b9e1-805a8d6cade0.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/ff6b6ed3-3123-466c-a054-a43ce439d33d.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/1eb65b36-3c73-4545-89a6-c42559622841.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/dfe2cbe5-9477-4a52-8582-961db000f0a7.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/4f8dcc28-00c4-4606-a0db-c3f51ffc0de7.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/c2eafaf3-5f05-4312-9fe0-3e7a74c2e33e.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/266533e2-f0c9-4fff-8afd-4f6710b5e5df.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27431/20121e6e-3011-4850-8906-f5836325f17a.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 60
  },
  {
    "key": "Rjm8rZokz9",
    "title": "Married by Contract, Loved by Fate",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/53250d93-ce40-4e4a-8da0-5c7bbc189db4.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/8aa88117-670e-47fe-a17e-73342f8a943a/h264-30071301-7ca1-4bec-92f6-58d09d774997.m3u8",
    "duration": 90,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/64a5856f-b49a-4906-b2c2-1ceb010deadf.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/75f69ae8-f075-453b-80e8-ab5485550273.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/26253/9b51da2d86b003519f40c0fb23bfec5b.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/26253/ac73f911fbbf0395b41be35281e30707.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/26253/80458d296c3011246bb220615875e408.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/820d5865-66cc-4e0e-936b-b5770480c84c.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26253/93004469-220b-4f99-8f78-c00c64115a2e.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/63811898-3fe8-4586-b6ef-b09b9719fab0.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/f71d2b62-feeb-4268-892a-528cb2f176b9.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/863c3852-0e1a-4a39-9eda-10ad06166a9c.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/cebce432-2f89-4ec1-8118-6f9fc00675f8.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/45f66e0e-26d3-4285-929d-7a8b3f18a70b.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/26253/7aecbf883b8fad70fcb6c6f5eb4797c2.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/f71fa4a4-ddcc-458c-b13e-807e2e77d5d6.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/41ceedc7-7a31-44ac-ad03-c82710854fd4.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/4259146d-7249-4dd4-9fba-f90bbbb4ea93.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/f1f7b382-950a-4db3-892d-c987d9a30895.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/f620e3c3-851a-4189-804b-ce38a1a4c494.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/b591f3b2-98b3-45fe-9b86-72fba0061fd1.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/b701538b-5870-4bcb-9d35-189373dc8adf.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/7ba53275-e36b-4b30-9697-c79a8e1df579.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/718452de-b4cb-4464-9055-854bd1eb25af.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/8616ff15-94db-4de1-9d9d-8d0005eca29d.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/b69a37d5-3d3d-45b7-8e6c-306d59602892.srt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26253/f0c2b299-e955-4d40-8ca6-848ae8eb3520.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 80
  },
  {
    "key": "vyHadN3Akw",
    "title": "Deep Sea Crown",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/40e0e3a1-9153-4fc6-ad08-14e28ed74344.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/4a3e812f-d7fe-4059-a1ca-b459649ffe6b/h264-6285b1c2-b818-4db0-8193-f3b70fd76f9f.m3u8",
    "duration": 69,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/bdbdf76f-e05f-4658-969d-cd250393bf2d.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/27223/1_0713fa3d86a01b0d15430f0ba3933301.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/4370ef4c-54ad-4f4b-aa72-d295b4532451.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27223/3d728610-152c-48f3-880a-c6570b04503f.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/34bb3235-eda8-4b21-b455-763678ba5965.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/0f2ba07e-d89c-45f0-b0ca-5aef656f5221.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/3b1a386c-72f8-4814-90e4-81cec8cf9296.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/f9aa270c-bb19-4c9b-b7b0-c26036b3d2cc.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/967acb64-15be-400f-a8c9-e466efebaa14.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/c44d2e0f-46a3-4e70-9da0-d4cc0f1b61c9.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/cd29752e-d4da-45c0-b5d5-2f6a61b69cd6.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/4b842cc0-4ec6-4c5f-98a6-d267937fa925.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/2d970689-6ea0-4572-ad02-2419a7a3f16d.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/0dfdd9b0-bc6a-48e7-8ff7-bf1769be0103.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/c19003b1-998d-46db-a1b5-109a8e5193c0.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/97763021-7daa-458a-9d3c-ef2f8b268466.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27223/9ba82292-22a0-4c0a-ae52-845f81cb34e0.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27223/832ae0ab-e67c-48a2-8276-577d070a1e93.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27223/be77ad0e-8b4e-4a48-8c0d-52c9669fd5d8.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27223/1dd69a98-dd0b-46c5-8369-c923fb918e23.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 35
  },
  {
    "key": "jBtlgVhus6",
    "title": "His Little Secret Heir: The CEO's Regret",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/25d25b75-482e-48e6-84a6-ea61fd25c0d8.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v1.mydramawave.com/vt/88779131-959e-4cb3-b74f-7de5e2fa72b1/h264-4d166bf7-0150-49eb-a33c-a159eccd1a8e.m3u8",
    "duration": 63,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/3862da79-f0f6-4cda-a5d5-c5959b2e3e52.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/28016/e2a3266a7a25b80a207cf9e19e17e8fd.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/28016/44ae125ccb2ab1c85751c7fe79e41c57.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/28016/8e757ad0fd07bbabf58d287c48270d3e.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/28016/c38a02dda5ed038a1c54c8833756f525.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/vt/28016/26d1ffc5b973f8cfe468b8af80875164.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/478679ea-bc67-4792-94c5-b46b4362b366.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/2c778e2a-a22d-485f-9d3f-2ed11574c03c.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/28016/15c6acf8-555b-401f-8d63-5bd308c19c9a.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/39dcfdb7-42ca-46e7-8b25-25d7e086279e.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/28016/61a81593-75e4-41e5-b3d5-f14608aff092.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/fc5769ac-2f42-4c32-afd9-e17fc346e461.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/21859ba5-234a-486b-8b01-b77885414eb1.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/d8af3401-cd29-49d0-8772-30a308423c03.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/f553fcd7-ad63-4c7c-badb-006c718fb861.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/6eb3f5af-42f1-468b-8ee2-950f23053e60.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/2c6cd9d1-5b4c-4da5-9a7e-bf7756513632.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/a8793a3b-4205-4c67-8e4c-636786a8bd80.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/1260764f-ea92-4417-a685-269689d5173b.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/594123a2-71c1-4810-bd74-0feda2279278.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/85508849-5092-48c6-bc78-027b3c637d8e.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/28016/075cbd36-b62b-468e-b385-7d7e4e7a4a3e.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/e4fe535b-aa8a-4484-bf9d-b2bab9dcfbde.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28016/dfd43e38-fdd1-4a36-a926-f894c8b2767c.srt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/28016/65b99b7a917aa3c2adadc7ad4d710555.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 36
  },
  {
    "key": "TumOl2IaKO",
    "title": "Giant Baby Blesses My Family",
    "cover": "https://static-v1.mydramawave.com/vt/resource/netdisk/28286/0_7baddeed4aaf9076fdad9c6411afb238.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/24a389ef-e63c-45c2-a394-86d9801ec37e/h264-2c10c0c5-2bc8-4f0b-b5a5-1766aae9375b.m3u8",
    "duration": 61,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/bd4cf829-1db6-4603-aed1-622f7b71d325.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/1ed0a97029261c39798cfbbc43c9aaec.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/333a81a1-7e91-4934-9cc7-80624573cb71.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/cb71ea6a-2d32-4e9e-a418-e862037127ff.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/69f9d2e6-73d8-4e28-908e-185c096526ca.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/20482348-b83a-42e1-bf66-bc172422d75c.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/e17da183-72ae-4de8-8fad-11188df1db23.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/7de90a58-d60d-4967-83fd-ef093dbe91b5.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/28286/052d6351-0ec8-4823-a27d-968671808d04.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/53f0c34f-d01d-4a4b-aa22-df79a40b1f62.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/28286/0c81781b-07a8-4385-a293-47df8b2642ac.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/37990905-10bf-4cbd-84e5-19eb2329e78c.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/7097d7eb-9ee8-4642-95a7-d4f6787e8521.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/cf6eb22a-72cf-4654-a75b-7f1c5a3ad26b.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/14e37a01-f300-436f-95fc-09764db1e6eb.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/e5d1ae71-42e5-492d-aebd-7a1753dc0c7f.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/69520e09-d2a3-46a9-b5ed-28db8eb3dd7e.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/cf16e195-fedf-464a-8022-e4bf092ec59f.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/fd6662ef-71c4-422d-99af-ba169087e307.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/28286/b6297e9d-a8f6-4e88-ad26-973abd37a5f0.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 41
  },
  {
    "key": "88CsZAxsWt",
    "title": "The Dragon Jade Witch",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/144b1c5a-2aab-40f7-a85b-e21c444d28f1.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/5ee7e312-1b37-41d7-98ee-b77449a33985/h264-845c94b1-06c0-4a80-80a6-be981116f6fe.m3u8",
    "duration": 104,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/87bd698e-74dc-4b31-9245-316142e68255.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/aa3c7565-48b4-4ae9-8003-8624069a1d62.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26515/49fe1ef3-2b57-476c-a695-148a06d5f9ec.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/e4745369-6d06-4f9f-b83a-ff01177f9a59.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/f49f067e-600d-4b4c-a354-0f85285cf091.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/d93163f3-09a3-41ab-8f0b-a186163fcd3b.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/c81e7149-c340-4e9f-a6ef-06932a4a2ec4.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26515/f0819a2d-ef38-48b3-8422-3db687fc7b3b.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26515/aecc197f-c6f2-44cc-b2c3-8f0c33f1ea72.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/abe384e5-3bbe-419a-92ad-cdb7046d3509.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/6de695b5-ebbe-4dd9-af81-46a6a165483d.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26515/8055ddfe-c44d-467d-87cd-0db045224f0d.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/7f4724b4-4e04-43f6-b221-87fd9ccb25e8.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/97daee02-fa82-44c4-a250-6801727f7e53.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/62297d5a-a915-428f-be0d-856a10d78592.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/5facb5dc-f311-435e-882b-f8577fbf1397.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/a8e19a55-6ca0-49f4-82e1-bbe788592a4c.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/01ffb7df-2598-4a57-9167-fc247f97bb09.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/607e305a-c92b-4194-a86d-51f5a8ec8277.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/872a43ca-921e-4604-b0c6-635b7a5a25a1.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26515/87f8b998-9d73-453b-a997-897d073e7967.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/a326bc7f-fcd4-4566-a467-5824e9141bfc.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/2ca0e292-8b63-4750-a00e-d5e0b8f62d5a.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26515/47aa255f-2bec-4e0c-a171-07fd885024c9.srt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26515/5b3e8db7-808f-4a04-b92d-febab073e0e2.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 40
  },
  {
    "key": "jTPCqJgdW2",
    "title": "Your Loser Husband Is the King of the Gods",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/35e3a262-9700-4bae-b8a9-d6edb97eb2ec.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/5aa96d6c-fd36-4bdc-903b-e8190a58230e/h264-6f4efd79-db2f-4910-9bd8-03fec492492d.m3u8",
    "duration": 147,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/4334f548-485a-4011-8a22-f5bb6ccb6eab.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_1aa16996390a9989438c2c1b8eb49b5b.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22158/15b67d34-821a-4eaf-be05-800d42b8da44.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_d9a726832745e32b3d9a11c6f806cbaa.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/68959b9e-dca4-4bcb-bc0a-7c29cfe90f6b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_8dd8287458291b6eefdf08d7a628bf68.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/887da1fc-6461-4424-95cf-6a6c48776338.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_8e1e9411dc572e8dd686c229e8f7b2f5.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/92c1462e-21be-4881-adf5-652c7b5662c0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_e28bda5434fd3db8a6c55fc854a3a3a5.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/22158/1_8cf6ec11-309b-49f7-83ec-9b88eb27f458.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_1c6182ae1b35d78b419b0180be0912e5.vtt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/df85846a-a857-4e75-a2ef-cf4a061ad3d9.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22158/1_59fa51cef74ddb2c5b94addd149db457.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22158/1_1554218b-047d-4609-9ec9-27038a2dddb3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_eafaac9a5ff7d194cc0c49197f8e9822.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/3be28049-7666-40f9-8859-736cbc367199.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_00bac3c2a3dca556db9ea21ca62ab014.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/ef9dd3b1-e5cf-412a-a892-dfc30e7a719c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_f7cfb80ed1dd5e9d749733b800ca3994.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/eed4b6e9-4fa5-453f-8684-174468c91b66.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_5b0c0de4e0e2a8764f6c40cc07c0b83c.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/746820f7-f671-4323-8d4b-589bac53b32b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_9e29b34ea59106e49c46ed6bfe25f642.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/d832e489-b98c-48bd-a4c1-4f5a7ee412fe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_eb45019fdff5e7bc34f8c0d2ff170fb3.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/e582925a-95da-46ce-8163-621d620f550a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_d621f90d4fa7fb115481f68ae322b027.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/1a7d2289-d9d1-472a-84d1-12648d5cabb5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_b7b6b6133f774347d10f0d430669ea8e.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/837603a6-a4f6-4da2-8dc1-750b764d8185.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_72b883c0a38b8b6bb3e3c9323c2e18b9.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22158/cbafdeb6-20a9-4c58-af2a-445c2c8693f9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_4e9e84ec0ff3f56b5c0269d405ce1130.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/c8fd7293-e9ef-428a-8275-f18cf9f87a49.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_b3c98cd9cc62febb698952f13970a997.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/eca48bf5-d512-4421-b748-1c6e44f1e792.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_44467e4987dc46a11633c327da519cff.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/8b0e3afb-b8ae-48f5-93c8-d18a65465b73.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_0a8845861edc36939ab55dc94b8a1787.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/99a61801-c48e-4e00-939d-18dcbfd428ee.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_0924a7dcdcdd2d9c339ea26a7d7e7166.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/fba25417-f63a-4b21-9435-503971702b77.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_8e5c72a1335e8644068781e85d376d25.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/4d4b50fb-9960-4e93-affd-af7be2dd95c5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_0d177901e8e4616a45c6f7a0c0ce43dc.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/c11bc46b-bb11-4c4f-8b24-4f26ab1c4a23.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_c4f786562808ae03dc43d58d12acd831.vtt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22158/485333c6-08aa-4516-a0a8-8ebca195cbd3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22158/1_378a4243dd0488edab027997fc660483.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 45
  },
  {
    "key": "nTpBsX4hwj",
    "title": "Once Cast Off, Now Crowned(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/a5ff51cd-3057-468e-9f6e-b6671d9fdd09.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/1d9f805c-4c92-4e0a-a40d-b9c85e8c24bc/h264-932f36dd-ca3f-49f7-b647-cc7616cd52da.m3u8",
    "duration": 189,
    "subtitles": [
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/14547/1_67dc9a99-9571-4919-bc74-4e4c6771e55f.srt",
        "display_name": "English"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/14547/ad597ab6-d976-4125-99cb-6af5e6f56039.srt",
        "display_name": "Tamil"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14547/1b315f66-c051-4366-be5a-2634c04017de.srt",
        "display_name": "Telugu"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/14547/1_664e86c0-615d-4122-9853-a312c82206d7.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/resource/netdisk/14547/1_2e06ce3c-b40f-45c5-afa9-608916b35dea.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/14547/1_61f39e95-0e2a-4237-a305-3c30aacc0059.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14547/637ff4d5-e90c-4fe4-a66a-8f909da528c6.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14547/7d1ae5a3-e3e9-4eb7-993b-7751e10c4b32.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14547/84f2ec73-55d7-49d4-937a-67363a5730b6.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14547/78f8d21c-def3-40c5-8372-0a79be0730aa.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/14547/1_e4b46d02-38d3-4904-b5af-beb052cab757.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14547/60d74e81-2d14-4b87-8d21-cdf3bf79e33d.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14547/6c72cb58-6e50-448e-8ab2-2e5485aa619b.srt",
        "display_name": "Korean"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14547/072a50ad-8615-4c7e-a9d8-966d0fafb9d7.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14547/f202b4fe-3e48-4a4a-b8fe-4d7e8ac2d4f5.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/14547/0973d130-2da1-425c-bc3c-685d90aa0c44.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/14547/abbaf5d2-3eeb-4338-99a8-b2297558c24f.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/14547/1_1d2e3ce3-ca99-4300-9e8d-6bd2abd8118f.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/14547/1_c55df6c0-26b5-4962-be27-bfd71e7f4f91.srt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 80
  },
  {
    "key": "TyEBZhHhDx",
    "title": "The Wings of the Erased",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/996c8cf4-dbf5-4b21-bcfc-010be5e61df9.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/d95be2a3-7add-4b04-b2ba-fef0d305dd65/h264-67a5158d-3d50-4079-9d79-11f75c7b5886.m3u8",
    "duration": 134,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/7b1e3a4a-aac3-42c8-84e8-bc1e75b8ac05.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/a112912c-c357-448f-927a-fa6645ba5979.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/b648acf3-2476-4883-99c7-5220ea413bb7.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/38cb1d2b-8bea-44b3-9f43-2a8d4ef144c3.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/77b1a2d7-ed98-4ad3-b74b-301033cae370.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/81836e7f-6b18-42b8-956d-a5ce076099f4.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/1c85193a-d239-4a34-b2f5-99726d72f417.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/b8b6af1f-b544-4e95-a7b7-999745fbfc92.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/fa8faa65-9678-4e0d-9ddc-49abd3594f28.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/44291b7e-46b4-4323-94cb-e914347198d8.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/91b0fecb-cff0-496a-966f-c16c0322cc28.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26943/0ba080da-e23d-44e3-847d-2ccb52d1897c.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/c4a60b13-9b1c-4cae-8722-b8f40bf4a1fb.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/a2ad8460-6e3b-4e28-ad1b-8a37060b4300.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/92f7cb8a-6988-401f-8863-7a7504457155.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/ebb56d1c-a206-42d7-8b77-a638081612bc.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/708cca9a-38af-4cfb-a8f0-2e8f6c88c50f.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/1179a57f-86bc-485a-8fdd-5d845226eac2.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/3a1e97af-4f6d-4626-a02f-eac244e5d9c6.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26943/1d531cb5-77e2-4522-a9b1-08a57b12eda4.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "Vgf8L7QqIv",
    "title": "The Magic Prodigy: The True Heiress Returns",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/2b2073c6-97cc-4ebd-8d09-f4c141a4de5d.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/94b4e11e-3498-48c9-ab6e-74b52bf92792/h264-cb5bc31d-b1b8-44f6-9095-e5860b5c6c90.m3u8",
    "duration": 60,
    "subtitles": [
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/4d4255f59be37c5d17a5dc2012fdbf92.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/6452858f45f5e4e9415fe8192099087c.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/9b48c9fffb9521b398919fd4f4a7232d.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/4b09f7fbf557db33abaa2c5edfd36fa6.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/vt/27548/c5ac3fd9-8fa5-4b3f-ac73-2ba374257c1e.srt",
        "display_name": "English"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/d91607ea-ddf9-4a51-8bf7-34ef37b0c8a0.srt",
        "display_name": "Polish"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/9e833970-6063-44b7-b1ec-5b94c9a9fc9c.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/2ef959c8-e4ca-4c98-89b5-8a702f568f69.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27548/26fd6d52-9aa4-4e4b-9abc-1d44105656f1.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27548/acc3d542-4ac8-4d00-ab5e-7a7cb1d78bc3.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/7305fd6b-346c-46b9-86be-556ffd189ed2.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/3c43fcf8-4cea-409d-b4b9-31375effc2b9.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/6f7a25a4-189f-4b80-aed6-d4df1198ec64.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/93c813b0-5ef5-4bb0-8c3f-6cbfaf31e484.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/26298491-0006-4fc9-baaf-1895fee904d1.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/988eaea7-c702-489d-b286-99d2b5c06e27.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/7a2b1642-32b7-4c88-bf55-af80c57d902d.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27548/8beb0202-2776-4c82-a5a7-81b577f73d09.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/0c7c5f44-4ec1-4874-8ebf-dba6027605dc.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/9f9c5587-eaa9-46a6-bd4e-c89cbb21b5ed.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/a45ed99b-f88b-4462-926d-16e7e0592111.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/404e6ca0-2690-45f0-845f-e1d9d24870ff.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/3598cccf-5dc1-43d6-9bd3-11ac1ac9d48b.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27548/496c813e-f102-441c-bec2-390cf0bfaff6.srt",
        "display_name": "Greek"
      },
      {
        "language": "nl-NL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/b8ee2c66994ff28ebdc3306b1380222b.srt",
        "display_name": "Dutch"
      },
      {
        "language": "sv-SE",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/27548/f4bd1ed39755362a280bd85630a0b533.srt",
        "display_name": "Swedish"
      },
      {
        "language": "da-DK",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/815c3234d6900ab37182c96a29a7b53a.srt",
        "display_name": "Danish"
      },
      {
        "language": "nb-NO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/08be1709e3e095164c2e013163685364.srt",
        "display_name": "Norwegian"
      },
      {
        "language": "hu-HU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/4f5f9b5694762d0b721b6b9ace2ae79b.srt",
        "display_name": "Hungarian"
      },
      {
        "language": "uk-UA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/d606dfc5d00496c3249bb429f8fae519.srt",
        "display_name": "Ukrainian"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27548/6dba9e65eacf3860d471772999abf353.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 45
  },
  {
    "key": "ckCTYRLp2d",
    "title": "When She Sleeps, She Becomes a Dragon",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/b5bd0e69-20ca-4a0e-93c5-39f4b3d6302b.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/17c91a87-dd12-4ca0-8fda-a9786e50ddd7/h264-2b8900a9-bec3-45e1-912c-d6ecb0d30d40.m3u8",
    "duration": 69,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/c98eaeb7-0db9-4300-ab37-c80c65dec8ef.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/vt/27144/27883050-c470-4fbb-b3bd-f185a823a74f.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/fda28a40-da17-45da-8598-bff0bd1a8649.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/4bb7bbae-6816-44f0-bb3c-43737da3f434.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/24781f9c-11f3-4019-98c6-140609a8128c.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/b4a8840a-aed1-4b35-bad6-cb898207646b.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/12ab06dc-8fb8-4b7b-8676-2714ef2fb812.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/69701c45-c992-4183-99a4-2c8a11d9e4a2.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/ac94c31b-78aa-405d-b013-8295e1676149.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/27a62f58-0a45-4935-9bb4-bb9425885202.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/dc70b5dd-1653-4baa-8775-8e344f29e10a.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/075f2ef0-41c9-461c-a219-3b594f928d79.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/d3407290-81f2-432b-a3c5-0a8a1ab96d4d.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/b767deb6-2a64-43ed-8d56-234958e4db06.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/312c7aff-b87b-47c1-a908-4784aec5cdf1.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/54d518a7-fc19-49cd-9b12-97eb03967215.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/de7281c9-ba74-4677-b63c-80dec6d3567d.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/b5f13c79-e006-4ca2-bea5-eebd1e991952.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27144/1a160ee7-08cb-404d-a6da-3ea3c3c144de.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27144/1492af17-c472-4ace-83f1-97d9e0faa387.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 40
  },
  {
    "key": "ShoCngtsEI",
    "title": "The Dragon Above Manhattan",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/989e5c2d-8f43-4d5b-8e58-da6602036652.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/2963f991-5a30-4c9b-ba7b-f33d371e156f/h264-12920862-0e81-48fc-9171-e560711c9682.m3u8",
    "duration": 79,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/5c11d9b3-0463-4d33-be74-0bd5106e1829.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/9e6e08f0-79e3-4ca8-a767-c783b2063ecf.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/84c58c95-8de0-43ab-ac29-632cfc4faac6.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/c3f66145-9e85-41d0-b728-23840b8bf8ec.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/3899503f-b55f-4978-a420-3263c596d49a.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/a143d783-cd54-4474-9dde-82d2b7e8e8e4.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/dabbd5c7-9a9c-4aec-b0a5-6c02c963b54b.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/71806df5-6f57-430b-96a2-36ecf50dfaae.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/e763065b-808e-4aed-aa7d-1f34a5f4c106.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/fc09f605-213d-4a5c-b134-c52329da3ac0.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/58447ea6-f5cd-4c8f-9f0f-273849723ce7.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/6b1a9483-2820-4bff-8fc4-0152d5339e61.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/0956b9f8-ff74-4d2d-9f81-57ca65d45cc9.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/e7b83022-8cfe-495d-93c3-8864b826c4dc.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/0b49ef6c-9852-4655-b1a4-bca60144bd74.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/42692826-9232-4509-9bdd-e9f32a382ee8.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27196/77d79d91-cafe-4fcd-9da0-d61ba67121d9.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/03ca7673-1bf1-4640-b2d9-96fa28ec3f6f.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/29f8962f-edb2-429c-af60-72e614e1ed1f.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27196/7a0938df-0ba6-48bf-b861-4ddcd75135f5.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 40
  },
  {
    "key": "KV05hGGQtG",
    "title": "Married to My Ex’s Billionaire Uncle",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/8ebe1532-5f5b-4dd5-9153-31bac49b2669.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/44b506d4-4252-4dca-8f23-68b799d019ca/h264-198bc4d2-de89-42ca-bf39-b154b7354601.m3u8",
    "duration": 59,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/413d4e67-b885-4362-8d64-34a4cab284e8.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/2b697df070f37e81dc15e1659f914995.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/8160c684-18b6-4ea2-a7ee-0f39a9d6ce20.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/4caeeac5-ceff-4dfb-87cf-104e44d13d1a.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/cb10b3c8-36d6-4efa-96e8-abbe6a767090.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/67c7a221-fe3c-45d4-8059-f818b9c0939c.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/e13a08f8-ded2-421e-a347-34c828e7c648.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/cf411309-7fd5-46b5-80c2-7570b0149758.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/dc1f38a4-d2bd-4e17-ba34-7b7e9c68a39c.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/1c6838a8-f6a9-4790-b3f6-5862717f0c82.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/5d832467-f071-462c-8f6f-b42da036c05f.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/5b51822d-0e7c-4604-b980-67141b587c48.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/3cba195a-317f-4728-9c15-f779dd3b1ba3.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27184/85181e78-bd09-4c98-a897-56d0efd5181f.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/d2134438-9b3d-4144-9f87-60c22fae52e4.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/7b017702-3e22-4c59-8fbc-d7c9bef034b9.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/a20f9bd8-503c-406e-a4cd-5cf72ddd9bb6.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/e0f0a217-3b5b-4415-a40b-c98cd43c6308.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/af9bb4f7-becd-438c-afdb-65e1a16e1752.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27184/ca66602b-9220-4903-8913-c663539144d8.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 45
  },
  {
    "key": "OAHqBTwqPL",
    "title": "I Faked Amnesia After He Tried to Kill Me",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/86105771-435d-49d3-bb8e-24055a2afd2b.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/23d724bc-1f8a-4c87-add7-5a8c76b97c66/h264-8e1169f4-4eb0-4571-8bef-1518c3220caf.m3u8",
    "duration": 59,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/9933335f-3e22-4544-bce6-d783b396fbad.srt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/vt/resource/netdisk/27110/1_2a6d251671dd16a7f0a152c5fc48a551.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/3fbec4a3-ad22-4137-a1b4-97434ef58a6c.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/b168ea3f-753c-4291-b67f-7f4b9b9e686c.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/9ebf720f-2b3f-44c4-9742-9d78fcf407e0.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/8272766f-df02-447e-87ae-c40f492326d0.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/9b279c3a-b009-4f7e-a4ca-83eae47f45aa.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/4f4204f2-94fe-4a31-800e-f9dbbb866fb3.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/9335dd86-2ab3-49b7-b016-864894c53ff2.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/d17418b4-4027-4fcd-aba9-26ec0c63df42.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/bfa45b27-ff09-43d0-870c-d9d6b89f6d8f.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/5e72f251-a050-49bc-959e-c2af5495efe5.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/29126019-1f93-4cb6-be9e-d85f8ffd7278.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/24db608b-ba35-4e0b-80d6-0d4f16f5f1eb.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/47fdd781-4f39-4e9d-a4fe-77f4fd16008f.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/b40b63a7-3c49-4bb5-89fb-6463ef91842c.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/dd490c2c-4d09-4a85-a351-f8d7494fd9bb.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/ce580472-3f62-45c5-bcd8-3a95c08db037.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/fae659c4-cc29-4a2e-8739-9f3fffeda17c.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27110/501fef46-4a6b-40d5-adb3-df9b27fa1ef6.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 45
  },
  {
    "key": "8MF6PzlyGv",
    "title": "Barnaby & Ellie",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/542120c2-6adb-4a37-9c9e-45e9dc0d3dfd.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/52ce3ded-341f-436e-9b3b-84e5df3aeeb1/h264-ea8f3199-ff4d-40b9-93ca-8d4e56f0dd30.m3u8",
    "duration": 98,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/255cbafc-9716-4b77-8793-b8a0deb24b09.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26935/13fe300d-b48e-4219-9a40-7b5d66911db4.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/26935/f80c47cae2c478708b7bf68c29fac65b.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/26935/8aaf4c818956c78587d5f24c21521828.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/26935/6d3993147d2dda5de2f49a7602b537d8.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/vt/26935/611845f273dca1e363960cca36633f94.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/78a08ee9-7756-4639-aa11-8a42ec64bb61.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26935/b5e4be90-22cc-4dce-9a5e-ded56a35cb58.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/fc4b7a08-b655-4a30-84f5-d6262f2acba8.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/bf6b86ba-7ea9-41e7-9e0e-0494dd8a2b7e.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/26935/0c5f8773-aa2c-40c3-abfa-d34acf9fd51d.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/ee0ff0f5-32bb-4837-a6be-678bfc48e99d.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/55940d07-2b5f-47f4-93df-bbdfd3bd6902.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/01880f84-ed5b-45bf-b1d6-4068955ac125.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/90176504-5156-4fad-93b6-db0e99fcc81b.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/7a52625f-9bc3-41cb-9014-d0f5014d4dbb.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/9d5034a3-3e22-4fca-a6ec-e7ebdc739b31.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/1e111155-1c9a-4538-bad7-a5efae7bb6c1.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/fd44bdc2-ea12-4035-b3b7-946910d31f03.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/74b3ce6f-2fe1-4d2e-b6e3-62d51402a7aa.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/d2b98929-056b-4473-a139-17840fed6cd2.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/6b99cbe0-6bb6-437c-a0b4-1033d38880d7.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/f76ec7ca-a70c-48ce-87b3-c89d951a8008.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/6fb15862-1d34-404c-88a6-75a892230e1f.srt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/26935/156d2070-847f-4f80-a9d7-39390640b373.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 42
  },
  {
    "key": "wyd3GkZ0T7",
    "title": "Ebon Wings",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/ac4ab6d6-2635-4f52-9c20-86fcf09c8c94.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/cd7208b1-9401-447a-926b-545d2037a77e/h264-b4b5cc1f-25c1-42c0-99cc-5ca847aea6bc.m3u8",
    "duration": 51,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/0a7d661d-f731-4160-92b1-1299f55ab457.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27114/146d545f-b976-40ba-99eb-d895eacf93e1.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27114/68dfd567d60f91d712dd96696e4f0a06.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27114/94784544ee3bbb060f0423e649e3b7cd.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27114/111a7d7bd32e76f6446cc0aa5b0146f2.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/c079dab4-2008-435b-991a-e8c77e49cb04.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/0ebe6518-6805-46c5-879d-054eaa3a6d79.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/c630b88a-4ad3-4d34-a395-e31a986e4963.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27114/1c2499b0-788c-486c-80eb-3f52e6b23a08.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/41c7be54-9505-422b-9e11-f2645e5b4be9.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27114/06cbc587-2286-40e2-b8d6-f0e9368af7bb.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/97c2a05c-d56d-44bc-99ed-7b8731c93fa6.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/450ea9e3-0a6f-42cf-8a6a-e4cbb562bc19.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/0d8da933-c92c-4c9c-aad1-e3293f7627bf.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/e25223a4-5375-4082-91c9-c0ff2fd435d8.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/c8e29005-3ffe-4ec6-9d47-7a32297069a3.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/d59a2ab7-93ab-4cb7-9570-ef9963d194bc.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27114/7f60f0ff-f636-4de5-9ccc-3f9ff995867a.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/bd760fbc-fdf2-4596-acde-1125a11fb69c.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/eb3e9605-0435-432d-994e-8e97e185ad9d.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/30a38914-2207-45d6-9852-7bbd816229a1.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/d8acac3e-a2ea-4014-b319-1a290a07dd30.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/7c02f5c9-cdce-44a8-bcbb-aacab7aec44e.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27114/44b724f1-f8c3-425a-9c8e-882f54f71077.srt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27114/a2ccc5dc3bd8672dc817a025f54c83cb.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 40
  },
  {
    "key": "dkSeWLpcEF",
    "title": "The Vet and the Moon Prince",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/13fb578c-37ce-4dc5-b5f0-7745591cb1c8.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/768caa94-2318-4214-9b78-9fa6918addef/h264-070dd785-b60e-4cc3-853a-a21a0dcf137c.m3u8",
    "duration": 125,
    "subtitles": [
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/27945/153c93ef95e99a4a5959f176d2fb9fb1.srt",
        "display_name": "English"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27945/58ff1460-4e4c-4720-8738-4f5755ec79a0.srt",
        "display_name": "Portuguese"
      }
    ],
    "episodesCount": 47
  },
  {
    "key": "Fz0HY8UPwR",
    "title": "She Dropped a Candy Car On My Head",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/18819a24-daab-416e-9558-e65a466b6963.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/63d5006a-a323-406b-ae6a-a88364c15cc5/h264-8d9a29e5-287c-4232-9ace-f7a6baba22ae.m3u8",
    "duration": 82,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/66d5d6de-9fd0-49ec-a036-b5deee9a5ed4.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27118/87f266f9a17644032376d27d678b48ca.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27118/6f12224b9eb063dbaf50f9a0b5fdfadf.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27118/80e58966238749563ade2159c7333a2e.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27118/669d54f9cc47c6ec69ca34f8beb3eeb0.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/27118/1_116d945dac3a7ae41dc1d27afadbaa26.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/63b11dba-65d9-43e8-969d-1173388fd4b0.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/295e02ae-e945-4028-a7e7-44f2562359f0.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/911c45c0-005c-480c-b110-ebc1c607cad5.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/4b7bf091-93de-4ca0-96e0-c54063e52dcf.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/9d099f38-2f94-4207-be0d-4074ab2b8445.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/3eb3d0be-4f41-420c-b6cf-0dd32feb9c1a.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/8a03e538-8adc-40ab-a958-d3a2cf71d21a.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/d459176c-5c08-4a4f-82af-3735a3d8f6e1.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/ad1c86cc-aa64-4fb6-9622-0af346a7bd37.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/d81527bd-d350-4dd6-9eb7-896b82a1f27f.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/605c3227-5d4d-4191-a033-100c789c87b8.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27118/52f4aa8a-509a-4047-810b-d61c86207e3f.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/44b8a97c-d3fc-4f59-99b2-8ee1122552b6.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/69ec31db-8520-491a-a9f4-f5f3a3d0d742.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/0c9733b5-ad10-4b30-b0f9-7ac39ccf61ac.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/7da69668-7ee6-4509-93b3-f1222b792b5e.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27118/377540dd-78e0-40bd-9d9b-0b2ac9326c87.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27118/bbc0df23-1627-46ff-9147-f90f55d2ce1d.srt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/27118/749b6a81dc5020dc9a243a5e88e75c0d.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 40
  },
  {
    "key": "sJjefO9Ejj",
    "title": "From Death to Glory",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/2315f4e8-3b92-432e-8bce-af778ebb168a.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v1.mydramawave.com/vt/4e1fd55c-716a-45aa-84bc-cbf277905403/h264-86eefd43-ea00-413a-992f-58e544a35803.m3u8",
    "duration": 75,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27002/d367d8fd-b14d-4988-8373-d9a7bfbdb507.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27002/9377db25-368f-4b53-9d53-3dd521ec1393.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/383954c0-afed-450b-ba1e-073e69e69efa.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/fd31988b-b7b4-45da-b3fa-e333465fca48.srt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/50ec5a35-3f63-4682-afb6-86b33a8c7974.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/282cb7f9-4a38-436d-8ef1-5a156a826ae6.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/73bb075f-076c-4605-a9b8-3a1f1cdf8672.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/5213c568-c28a-4452-9836-0693be50c265.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/9496a589-3437-4b59-b3a0-b21adde38998.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/27d61b90-4d9c-42e9-850f-28e8e6686269.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/27002/c6e012fc-8fa4-429c-a47b-111d03777178.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/d66a8f42-629c-410d-afac-6b23188300c6.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/80bf6f12-b51c-4777-9240-3ca4151c4795.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/c0fd4f3b-9605-4d4a-8779-fbe4115e7873.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/4a94d3c1-0848-49a2-8186-95dc344448be.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/a5419009-78f7-44eb-b85c-f913a8ba35f4.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/eeecd37b-e455-4ee4-9787-8622ac6891d2.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/e45dc80d-01f5-4807-9d1d-1bcadafd673d.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/e1332a50-2bd4-40cb-863f-e9fd7b57f9c4.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/0df2b08a-742e-49f2-9422-1a44b9dc4548.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/f0b4b3ce-b758-4507-93e7-6063f4e36ac3.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/a0b82745-a1ce-469c-867e-dbe67471b198.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/6b8e5b45-a796-44f4-b47d-df99fbcb0a5f.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/51f9a887-e2d6-420e-a472-6f140d5b685b.srt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/27002/a6b1f9ad-868b-497f-808a-7a271d1ad044.srt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 40
  },
  {
    "key": "VyUC9qggVv",
    "title": "Two Women, One Delivery Guy(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/000ea83f-2e22-4f97-bc41-6186564cb898.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/9c2528f5-c1cd-420e-a862-bb9142544717/h264-07a6ba81-81f0-43ea-bb39-eda33952d1f2.m3u8",
    "duration": 139,
    "subtitles": [
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/15870/1_8dbb857b-219a-4d0b-9b95-97c44b9b3009.srt",
        "display_name": "English"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/15870/08f802c0-8767-4854-85fc-1b043b35900a.srt",
        "display_name": "Bengali"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15870/03b783c5-b25a-487d-9b38-88af7e99d0cf.srt",
        "display_name": "Polish"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15870/eaab124b-ab52-4f95-afd3-a1d29bbaf3c9.srt",
        "display_name": "Tamil"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15870/b118d414-0c2a-4d3e-9944-8d27e5cba853.srt",
        "display_name": "Telugu"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15870/1_05871c15-377d-48bf-9af3-6f037d7f0930.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15870/0f1b8fa6-56ff-4b21-91fe-1b9e56b1b2eb.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15870/1_fb2c52ea-c256-4e48-8675-4c0d642c6531.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15870/e1ae0b21-73c0-455f-ab38-f3b163ee3d61.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15870/e50375e7-f0a9-4425-9802-b08c56a16753.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/15870/d2654d14-5a2c-4952-bc97-a56a2ac808ba.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15870/89129fd2-d83d-470a-818d-4f38bbafd10a.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15870/f327485c-139c-4d28-86b1-99ca35056f62.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15870/1_41eb1709-ac34-4163-986d-970963e92351.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15870/1_a67d5888-3579-49c8-a1d4-e6cd06dbc7df.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15870/1_dbf4623e-b45a-4a10-a0cb-b74ed1988b65.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15870/08d795b9-0b79-4260-8539-4c940ff4cd91.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15870/d97d53c9-2f05-443c-86df-6c51f67e3873.srt",
        "display_name": "Filipino"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15870/993156ba-4654-4e27-917b-ed348c5c1bca.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15870/1_8243b733-f96c-4a42-9cb8-34b2fb858c8e.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15870/1_87b7c5f4-0f94-422c-bbe4-1abc1d74ea60.srt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 98
  },
  {
    "key": "gIeEO1GSQ2",
    "title": "Masquerade With the Prince(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/c7c6a81a-e2eb-4df1-8c5d-0ea341de8d0e.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/0049ba46-b683-4e3e-b029-508a2b0c9483/h264-fc9665c2-2fe5-4025-9980-374ea7f5f6fb.m3u8",
    "duration": 203,
    "subtitles": [
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/40ff366b-20ca-49e3-aacc-2ac977545ea9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_a9703611-748f-4ae6-aca6-86e587e127a7.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/421d9949-c60e-4b94-96fd-17ec3537396e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_cb90df56-b0ad-4ba5-ab92-439281280bc1.vtt",
        "display_name": "Polish"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/16325/3ef635ad-04a5-40c5-9ce1-03f6e9ed9745.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_12ce36f3-543c-404e-ac1a-201eb4566e4d.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/16325/17d5a5e8-2b96-4673-ad95-26c3dcb1f7bc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_36eddcb5-a215-4aab-9e95-671a4d4db6a9.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/16325/1_10383ea6-554e-4c2f-bf08-0327274c262a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_aceadffe-a139-44f0-b7b9-3e6d0a2c3e5a.vtt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/16325/1_bb2752bb-430d-41b0-a51b-e521091c7064.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_8e6fcf3e-5180-4344-9ed2-4b216840f071.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/16325/b7d46bb9-0aeb-419e-8411-c56bd9b71d75.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_4f8dacc7-f170-4d67-ae34-5af629427d79.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/16325/1_754b8406-ab45-4804-ac89-1f7e9809fb27.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_c4a9c504-c9dd-4749-89b2-86f3b1d63700.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/e1fbeb2e-a14c-464c-a69a-bd3dd98c6ca9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_c2cfd7f3-277e-4b53-9b20-f06f34e04c12.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/735f9d3a-416b-432f-a13a-a0af9503e4c3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_64648ec5-8a73-40d3-b3a6-abae63aea794.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/74571cae-9797-49d0-bd9e-44250206a225.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_395ac328-098d-42d5-a0ed-21664b3a60c6.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/16325/1_9a5fd34c-c05f-4fbb-96f0-288dba7c9ec0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_ebcf13fd-190e-44fd-b97e-3319507bdb0d.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/16325/a199c625-045e-4abf-accd-e3f1410fce91.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/20005d28-6cae-4731-9a84-2f689a6ea801.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_33478fda-8019-4c50-b306-87ae9850c4d6.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/16325/bde28231-f635-4ecc-97f4-e5964958500c.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/16325/1_818a47f2-2698-4cf8-b742-521ddae93347.vtt",
        "display_name": "Korean"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/16325/9aa792eb-8801-411a-bea9-8680b9a5b466.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/16325/1_ca137dfc-2772-431a-9c69-a4edda8bcfea.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/16325/d7b85bb3-5101-460b-843e-bca77b380317.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_3bcacd78-0c07-441e-a0f2-261cf592e781.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/16325/f00cdacb-ce9a-45c3-9ef8-5754e504548e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_9cf177af-5c18-485c-9860-ae0fb9e99117.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/33466c09-12f3-482b-9391-14cd501804a3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_82a55345-3349-4f81-841d-48f7898a6b28.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/16325/4a52b12f-61dd-45d6-91a1-bfc3f50d94cd.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_7c8253ac-0cf2-4933-9511-cc1ba44d8b21.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/16325/22c0066d-2c6a-4a48-85d7-2500cd22c367.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/16325/1_c41ec64e-9121-49e3-94df-9c5cbb2bf72d.vtt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 80
  },
  {
    "key": "7YjBhhCUb7",
    "title": "Never a Doormat, Always the Master(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/4db601c4-fb6e-42f9-96ac-a99c972729d3.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/4bd37d10-42a1-4dda-80c4-e1dea81fd868/h264-2f4b2e02-2085-46ee-8f38-5bc250b42ccc.m3u8",
    "duration": 254,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15092/1_3c292204-1132-4490-86e6-9135020a0d07.srt",
        "display_name": "Polish"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15092/9dd83870-53e0-456e-85f1-d9a8276939a6.srt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/ut/15092/1_01f6d60f-a417-4d38-870d-c8d5030d0c7a.srt",
        "display_name": "English"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15092/87fb404b-df12-4de7-8041-bd07bc00e64f.srt",
        "display_name": "Czech"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15092/f371b9b7-5ac3-4eb0-b12b-b83949e99bad.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15092/4a809fae-2576-4e43-b540-81d64a2ae1b2.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15092/e42915c4-c011-442d-a5b9-3877a12774d6.srt",
        "display_name": "Tamil"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15092/1_3862361c-1124-4585-8161-0784641adc2c.srt",
        "display_name": "Spanish"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15092/1_0c64f6aa-e07d-438c-b440-c94b3a8ccae5.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15092/1_45edee60-f72e-4cc7-b21d-6c0a278b6ae9.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/prod/15092/1_e209708a-df84-4d71-854a-25f48e62162e.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15092/1_3ad922f8-7c18-46f6-b480-0145bf0f80af.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15092/1_4fc3706e-54fe-4a8e-8b46-b93b9e9f060b.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/prod/15092/1_10e00ff7-c5d2-4192-9f03-0d0f46a80e42.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15092/1_103592d8-0488-454d-9ae4-51793bc5dfd7.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15092/1_ca266279-a724-48fd-8747-a273aff690bf.srt",
        "display_name": "Korean"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15092/1_4374b99d-f91f-49e1-b08e-ea17c225e861.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/15092/1_8ad83fbf-d80d-4ae3-ba25-02bccc61437d.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15092/78677146-601e-4d69-8ffd-3f557e5ba0e5.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15092/f8cb9c05-08d7-4b1d-a37f-83d4e881cd83.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/resource/netdisk/15092/1_01704eb6-da57-4184-9c3d-5be6da7ff1e7.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15092/1_0036bd25-ea56-49d0-8596-bf52db523c10.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15092/1a618d9b-4c4e-492d-b534-56ee8608c249.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 66
  },
  {
    "key": "MpGIOGzBgx",
    "title": "Scorned Beauty, Desperate Men(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/66370ceb-4e02-49ad-95e4-35f805de6092.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/b9e103e0-dcc2-4867-bc7b-3a131e2c3c15/h264-02f498fe-027a-42c1-b310-d1071074b6af.m3u8",
    "duration": 113,
    "subtitles": [
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/15795/668506d8-51ee-41ea-a775-389282114a35.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/15795/1_ebffcdb4-c099-425c-b320-b0866e001060.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/bffcb4fc-391a-4c4e-b9ef-cd17d11a1ee1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_92e2c8cb-c9ac-42ad-a30d-3285d61b8ce8.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/70a9abdd-7fd0-4afc-b4a2-fd995b6fbe78.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_eb521e29-65d5-4e8b-accc-daf51d4ba36c.vtt",
        "display_name": "Polish"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/b21e18e6-aff0-4e3b-8e99-2c5eabee8be3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_39c30b36-7b85-42f3-8140-9657377daa3b.vtt",
        "display_name": "English"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/838b9d8b-00ad-4b26-8679-4332bd1fa8ea.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_cc51e68f-78d3-4232-af02-4c7c57af64b7.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/75602dcb-0317-40b2-8e6b-7686e1efc61d.srt",
        "display_name": "Telugu"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/f02ec092-37c7-49e6-9ba1-9c01f4f32cbe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_3f63c891-2b35-4f29-814f-86b41e0e3eaf.vtt",
        "display_name": "Czech"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/prod/15795/1_53412e23-f559-4077-a735-cef030d0539a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_f882a066-0841-41b8-84cf-2d8d0dcdcb71.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15795/1_1f18d837-de5c-420e-90dc-cc93b5d7ee05.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_ca322cd4-78d8-4dda-a3ed-6e95d5ec614d.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/df09fbd3-eb90-4f5f-b1bf-b5b1ecc71305.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_5d4a0792-acb3-4e30-9c6f-ff7e054d4607.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/4ae579a9-c69a-4fc2-82c1-b9c5b9ce07a6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_01da3394-d84f-4b3e-bf93-67468b0ee5a0.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/5511fe83-8bc1-4971-a9c7-4219aaa60130.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_ef819c74-a605-4cb6-8c38-f644256a2ee6.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/4715be48-f10c-49cf-b4bf-f7f28789b43e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_7e9e0ce8-9e19-478f-bb3b-3241ad46578a.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/0addce93-32f1-4892-9d01-1c4d085f00ed.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_24544bd5-6829-474b-9e79-fb42ad4dc3dc.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/3c592171-0ab6-433f-a19b-cad0f3e33be8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_64fb93d1-e613-4505-870d-2edc1ebea119.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/42e1a4cd-4e53-4a44-b260-69ef478c42f3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_d135f57a-9fb0-4bd7-98f4-b8495f953311.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/f6cc54d5-5f84-4830-9c89-1f5260d1014e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_b229799b-a99e-4e1a-a98e-cfd2d934d58f.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/e8b14bc9-b10b-4e36-a0b4-c4b751fa0073.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_16452d45-fe61-4c3a-851c-b80fd708605c.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15795/1_3db14fa8-28b3-4f8e-b0b7-f1daaa1aaedc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_013fae3b-6cb7-4b52-9124-9d7968d478b2.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/4843d81c-adc0-4660-af20-f781859f63d7.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/15795/1_614d8677-6777-4373-b46a-df332657553c.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/8b4b3d0e-50e5-467d-b5f9-3b878811dc63.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_f835af09-426d-4484-bcb7-3a4cf410c15f.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/63130003-61a7-4d50-9456-da2d1438eaee.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_90c3b0af-aafd-4897-877a-c293b3521767.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15795/8c86bfed-a3dc-440b-a3e3-13b58fc25933.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_d9b5f2d3-c035-4170-9680-c36dd0e3ed26.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/02d9354d-6477-477e-b3ac-9b7440010081.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_cff10220-1d07-462e-ad63-4d61b57e5b01.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15795/bca2e74d-3503-4873-a6c7-ff47b2060fcc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/15795/1_d59b4752-235d-4f88-a37d-5285784bb01c.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 78
  },
  {
    "key": "iWBe87bxW8",
    "title": "Healing My Mortal Wife First(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/7e3d9bf1-7cf2-43e4-adf0-7cdc33a0ad29.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/c1f4aa58-8ebe-4f48-9e5f-62a32d3afa95/h264-738e7134-da4b-4e88-bcd5-1d4331087e98.m3u8",
    "duration": 268,
    "subtitles": [
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15587/56084a94-44cb-4ad5-8fd9-e7c1eef1cb3b.srt",
        "display_name": "Czech"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_d096a005-6588-4ac1-81bd-ac2eff8c1a5a.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_90b46da4-2253-4b40-9d00-fce45a69a948.srt",
        "display_name": "Telugu"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15587/1_ec73699f-db2e-4cb9-8f3e-358a1a21f507.srt",
        "display_name": "English"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15587/1_682d08a6-842d-41e7-a8c4-feab266119af.srt",
        "display_name": "Tamil"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_d3b19396-f48c-4521-992b-e333ec5799d2.srt",
        "display_name": "Polish"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15587/d938b4e1-bea9-40dc-a9d3-f05330277dfc.srt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15587/1_dd0f4cf4-e418-4034-b6ef-e94583dc92b6.srt",
        "display_name": "Spanish"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_ce64efea-3d58-4bdf-9ba8-e22d9ec23573.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15587/1_53a66bce-07ef-4047-969d-7545d06e8cfc.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15587/1_95f29297-f50f-4f3d-a52e-953446cfb854.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_913c52fb-93ce-41bf-86cc-28f7b6b5fc3f.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_6a6524ae-8bbf-4bdc-93ad-be8a821f3a58.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15587/1_884ec4a2-fa02-4b07-a41b-639dd41e7e52.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15587/1_5dffb6ae-3648-4280-a02b-3ca3a80a270a.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_550881e5-6b38-4cdf-8174-9cba636e0ec4.srt",
        "display_name": "Korean"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_4fc2fc06-16c8-4c37-807d-c958b1b515e8.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_8ec57867-dfce-4cdd-90a5-9ab27c7623f0.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15587/1_6c49dca8-1d52-4e8b-8096-3914c8f22193.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15587/587fa17e-124d-49ff-a62e-3de48685cf72.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15587/1_d0f69b54-d411-4708-a837-da5f5c0c4e6a.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15587/1_52eb02f0-219d-468a-bb20-f1812e924ace.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/15587/1_2084d6ae-a105-42dd-87c9-e68285db8ebc.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 58
  },
  {
    "key": "L7Zd15ENUD",
    "title": "Slim Down, Rule the Crown(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/2b2ed08f-c1a2-41aa-ad5b-048e7dc3adfe.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/afbd9a4c-b23d-4f5d-802d-8553d3cd585c/h264-d30eb2fe-2f48-4e78-979b-94631813a94d.m3u8",
    "duration": 263,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/0a9a28e0-eb54-4041-b3bd-59f215e8231b.srt",
        "display_name": "Polish"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15010/6d9730a3-adf3-49f4-ab31-ac02bbfdd314.srt",
        "display_name": "Tamil"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/6a8b7bf0-717e-46f5-bf90-1758c34ad9a6.srt",
        "display_name": "Czech"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/f6e179ad-c81f-40b1-bd8a-62103c6d73ed.srt",
        "display_name": "Bengali"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/889f76f9-1f84-4084-b87c-3b4c15c039f6.srt",
        "display_name": "Romanian"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15010/7fb90b74-4375-434c-86bd-e4eb7b75e09c.srt",
        "display_name": "Telugu"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15010/1_2ffad162-5bc2-4c03-bc55-ee3bd763cc39.srt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15010/1_8b1afd7d-4220-4e21-8f51-e33873cf3121.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15010/1_ff44f4cb-388d-4d8b-b239-f97c4edaa3e5.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15010/1_2ce9657c-4120-4f23-87dd-156dd34908cb.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/42fb7328-bd22-441f-b08d-748546b84e51.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15010/1_b9da2073-5806-47d8-b7e7-4037bbfe62bc.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/3e8bb7aa-e3af-47f9-8794-1d0cadd74dcd.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/03f9eab2-ed86-49d9-b5cc-a87c9eff0325.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15010/50a3760d-7188-40ef-a463-53a3357fd6d4.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15010/1_c7c264aa-dad6-47ed-b150-046c5852410c.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/15010/1_5eea02a1-55c0-45f1-bbbb-cc43dcfd1a90.srt",
        "display_name": "Korean"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/prod/15010/1_2f3ff718-be0a-4483-b079-b3a4f58a818a.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/15010/1_7028dd7f-3c64-4f03-9fee-2ab1902b2b67.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/15010/7a720933-7b46-41d7-a2be-90d0859c9f6c.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/80a30b79-c61e-4e06-87d6-0664d9c1a898.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/15010/1_d6b8a53a-40ec-4644-a3c6-adfe2f8323d6.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/6ad20ee5-8e4b-4936-abd3-fd7226374d11.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/15010/b88ca840-3725-45f8-bb57-5579e557dd89.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 60
  },
  {
    "key": "7ciQ3LOCSU",
    "title": "Legendary Treasure-Seer(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/e919d818-e980-4ad5-bd24-8f2d05a5e56e.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/4434d00e-3454-4079-890d-795b82d8b5a1/h264-5099ec1b-bf7b-4726-b61e-a039c208179b.m3u8",
    "duration": 72,
    "subtitles": [
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/18204/c8be8fe0-fdce-42c3-a56a-ee72be15e41f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_5b2b4d7e-fe5d-4e85-ad88-ae37660d4d2f.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/18204/1d1e67ec-bb96-4f65-8c76-8acd05429d0d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_d27307df-aac8-4a54-a3c8-121039b83db4.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/18204/c81efef9-fac7-457d-b8c7-2c2829b6ddb6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_4722635b-4846-4390-a20a-a579732b2b7f.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/18204/1_77fbd1386a6b92ff456707d9166cf18d.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/18204/1_d3e53027-2335-48ac-9a17-4ca6c203b3fe.vtt",
        "display_name": "English"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/18204/79907110-116f-4c77-a95b-6dfea9ba98c8.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/18204/1_7486bf80-f17e-46c2-87bc-28455023ddde.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/18204/28c202a5-0d5c-4f1f-a9c7-27b011e52dd2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_b3ff0e76-c19c-4f3c-99e5-02bab90eb765.vtt",
        "display_name": "Polish"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/18204/1_92ee4f99-b503-40f1-9076-d1e2c77757a0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_c243e927-b25c-434c-9f58-c38dc9d39bb7.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/18204/1_b58c78cc-4012-4a4c-a68c-fca69dc75d1b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_00469f4c-8c11-4114-a385-2871b1ef16c3.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/18204/1_2a352cfc-c3c1-439b-9f7e-dc177cb1f045.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_951e94ce-dcc2-4c04-bae4-40034c807739.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/18204/dda82a3c-17d4-4695-a253-c6940682461b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_f5c5f285-9570-41e2-88d1-b0f84ec70930.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/18204/e04107a5-fc12-4f24-8128-4ef662514edf.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/18204/1_07f5df99-657d-44a3-954a-8d60fa6e8fcd.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/18204/53e024e5-297e-42b6-8b2c-e2c33a36e2dc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_fb0f0242-9801-459e-b86a-a91c1f69383d.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/18204/1_62e8b87a-d5c5-4802-86cb-42e554c99056.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_0aa4d5dd-0091-484a-a351-f51c8213cfb0.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/18204/1_c7323398-f5ce-40c5-9e00-1af071c0f72e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_26ed682d-f3fc-4114-a112-a136837ff7f6.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/18204/c6ede536-57e3-4d29-a994-076ccf7ff0f3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_9e758b04-0713-40c9-b7ce-96b5e483b4fb.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/18204/4dc45170-df79-4c01-b643-54f456397387.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_6164f916-8cc4-404e-ba94-746c626fdab0.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/18204/1_7a06ca08-c45c-4da0-ac45-798a91da30a1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_57d0fb38-326b-4b11-b6e0-862f231231b8.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/18204/f1019c68-e9a3-4de0-9d37-d44bce29ef2f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_6f65e9e6-40d2-49a1-8c37-3657fec5649f.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/18204/1_b5e71354-13f7-47ed-963c-e0d7107d8799.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_7f31858a-b53d-4566-99e5-10a03451f78a.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/18204/d7040131-a575-4e6f-9c7e-39362a7e9709.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_0ec77b7e-c202-41a3-b41a-742d1d0ee83a.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/18204/b25b2469-9ca8-4eb8-b6f8-593e4de3c95b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_22661e81-bd94-48f0-b60f-873cc4888d1b.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/resource/netdisk/18204/1_bed3a97d-c668-4abe-be66-08fe72be570a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_650a619c-6e35-4dc2-8266-5cb42fbd2e2d.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/18204/1_7d335614eef3ea23c10d68bd0d130704.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/18204/1_2ba9b542-c5eb-407a-8069-0f760f92a38b.vtt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 100
  },
  {
    "key": "KxCfMRKmML",
    "title": "True Heiress, Inner Voice Revenge(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/1941e055-c1a1-4e47-8662-8182958f8b04.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/7a869165-bc29-4819-8f7e-34425ab29b9a/h264-4f830e93-5fa4-4071-93f3-422c00b13bb7.m3u8",
    "duration": 195,
    "subtitles": [
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/14842/1_40d0c4ba-67db-4b3d-ae40-029c61183171.srt",
        "display_name": "English"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/7be3c14d-5160-4940-ab77-e82e50223daa.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/5ca22b5a-d93e-4996-a988-ffa539fd3bf2.srt",
        "display_name": "Tamil"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/14842/1_a45ab6ef-4046-4e31-8719-111ff29868f5.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/volcengine/14842/14743681-838b-49f9-adeb-031da9588832.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/861e26d6-e04d-4d32-a43f-1d0dfdd32f54.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14842/8a29f6c0-7064-4c85-9b84-60a64672f69f.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14842/2905a217-9a25-4ba5-867f-27a5c1ce9cd6.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14842/3018c777-0d66-4c7d-a2df-6932d163c7f6.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14842/1751aae0-bbc7-45b3-bb44-aeb1d8d1ad41.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/14ce37c2-c2b0-464d-b9c5-8f630c1e0607.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14842/27e387e5-c87e-4067-a933-c6bfc4a8bc11.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/4632bced-1ea0-4b61-83ee-5d521a6e71c1.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/a2115bc3-4297-4639-8843-2bc41a93db79.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/54a6ba86-bfe8-42ab-b8e8-1fae703f7947.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/caf76e22-270b-4ea5-9e85-51bcc9353dae.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/f752c48e-b4b2-4bae-a9d4-1f0a163f990f.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/14842/5e50e28f-a72b-4183-8469-543b6ab8c031.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14842/acbac827-f798-4b52-a981-d2614d59c6a5.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/14842/1_57ec3163-b147-40f8-ab90-dac9c5cc070d.srt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 80
  },
  {
    "key": "CF4qeQpbKV",
    "title": "Legacy of Mount Song(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/video/cover/1874064062831394816.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/6efde1b6-9b49-4810-83b2-3bd023946113/h264-33956d67-1fb3-485f-8d97-aa78ac145feb.m3u8",
    "duration": 101,
    "subtitles": [
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/82e7c3d8-b8cd-4b1a-984b-7d29e3439a36.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_8ea1f52b-f2b9-46e7-9cc7-777b4b61ab63.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/a8a010a4-de31-4f09-989a-e7c1ba705bfe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_6a962f08-abdb-4c3f-a598-cc9636402c57.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/38e30ca0-580e-448a-a756-eea964eb1023.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_5943d025-0a2d-45a5-a925-f0e4591a4687.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/11109/1_654ad466-5b6b-49e0-8f87-39fa9f79ae3b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_3ce25890-0bf3-4af3-9666-b04f43005782.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/11109/2f09c885-e66c-43e8-ad25-5f4e1438b77c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_f6b069c4-b7c1-4574-8932-2a1f59000fe3.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/11109/ff08b456-eda7-4ca1-a0af-c175ae2efd3b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_7a3137a7-00ce-4d29-aff7-e04dcf23ae65.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/11109/20581910-efa7-44e3-a6c1-4d8e123ebc31.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_1c0a5b38-08d9-4fb1-b78c-f83e72419e97.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/11109/cf7221ac-2627-4d5c-af29-5df55e84bc65.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_20f2f1c4-9d65-4a96-ab6b-3200765842be.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/f1f8e6df-c5f6-4fe7-b9eb-66f3a8aae0c4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_7f793f09-cc54-47a9-aefd-a30a1468fc85.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/11109/1_a8c66c85-3cce-4f1b-b08f-88ec5823496f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_592b0471-42db-4000-ab96-67577b9bad49.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/11109/25c89ba7-f88c-4d71-b50a-4cc28b22f488.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_cf0490fc-199a-47cd-98be-7b1267aabc27.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/f338dc7c-8762-4880-a3bb-96b6445d6a26.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_f6c9f9a5-e480-498f-a72c-72c5ef995e88.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/77078e0b-eae5-47e3-ae58-f46bbc58072d.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/76f6b309-9725-4d84-8965-6d47c1d9d4be.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_b82bf1c6-69f6-4ea4-b555-3221728158f4.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/bd4fa428-ae84-4460-9cf0-ce0e04ef75ef.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_950064e5-20b4-4fb1-a3fb-9f600a6b3472.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/11109/99cebf68-2eb6-4558-bd51-cd099c44eed8.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/11109/1_b535e903-a6cf-49f5-8b57-f1d24ce8cedb.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/11109/b7029b71-b3ee-472d-8e91-f324a353fbc2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_fef04e6b-90ed-415d-ac5d-cf8eebfc2c64.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/11109/1_f982b2c7-2d0e-46db-9865-c4e65e5d2c7c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/11109/1_cd852755-f41d-41ff-be6a-2ac09efea04d.vtt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 29
  },
  {
    "key": "utIY1faQ7f",
    "title": "The Billionaire Heir She Dumped(Dubbed)",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/9c9dfaaf-6950-4c62-9325-a42187e622df.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/bd730875-ab62-49b8-aa9e-bc08789d5817/h264-d1ebcab8-7752-481a-8257-307dc760e90d.m3u8",
    "duration": 240,
    "subtitles": [
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14719/5f568d5e-6fc5-460d-b316-c974925b10a2.srt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/14719/1_bd48bdfb-3d12-49ef-aff2-cd3f123b4151.srt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14719/2a7ac827-d476-4e9b-b998-16f6e8572c17.srt",
        "display_name": "Romanian"
      },
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14719/2621ddbb-815c-446c-9086-1f273478e4f0.srt",
        "display_name": "Polish"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14719/711c6af5-10e6-4789-a097-5c5c8982d96c.srt",
        "display_name": "Czech"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14719/22301fa8-8f48-441b-b06d-d07abb6642dc.srt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14719/2b3ca13d-a852-4a06-850b-47e0b7a8f8c3.srt",
        "display_name": "Telugu"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/14719/1_336192c8-9b1c-47b1-a86d-6c32fb5f54c3.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/14719/1_f72866cf-90be-4511-a397-1bd8bec0ed8d.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/14719/1_060396f7-2d28-40db-9f6d-6803be2dc265.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/14719/1_3e919cb1-8b27-44bb-8de4-6f4988255b86.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14719/cfaa9bed-25e2-4b4e-b34d-bbe13691b370.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/14719/1_5f311b9e-c9f6-4278-9deb-a9060deda159.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14719/bf0ab363-5bbf-4fd3-b8c3-9b8c4e9877a0.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/14719/1_b3c163e6-0298-4c5d-8090-84a7d760e8cb.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/resource/netdisk/14719/1_6a989e68-85ea-4ea5-9d28-56e5317c55e3.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/14719/1_a0c284c1-7880-47e8-86cc-01038d4e013b.srt",
        "display_name": "Korean"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/14719/1_a1fe7fbc-3cd4-4839-a66c-baba088ef963.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/resource/netdisk/14719/1_5182e371-64e0-4d91-a6cb-62c0d94ede11.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/volcengine/14719/b8dcb198-0e0f-4a92-9ed1-03d27295448b.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/14719/5cf7bbc8-b8e4-453f-9d13-1738616e408f.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/prod/14719/1_36c39c7f-1a22-45a9-b87d-916cfb63babe.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/prod/14719/1_4785c911-33b0-49b1-a20b-1c15f77b08e0.srt",
        "display_name": "Arabic"
      }
    ],
    "episodesCount": 66
  },
  {
    "key": "xSctP2s6hR",
    "title": "Married the Billionaire Doctor Overnight",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/8b90146a-aa6e-4db5-91e0-cf8e2ced8f59.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/7ccbaacc-888d-4eb5-9421-59db8f93ab15/h264-3184c09c-0fe7-4114-bbca-69441bd35c37.m3u8",
    "duration": 65,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/4da4cf96-0153-499d-9f49-0a786e3bda43.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21735/1_fc54c47af1167970b86c127b480e9210.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/c938ef0b-4cdf-4bb5-b602-fe4c09fc33f6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_ec9357d419c1d12672cf8c690def5b11.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/c59b416a-02d9-44fc-95d5-71388241e2a8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_faae30045a13590d13df5dd6e0fa3d36.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/d94d235f-1634-4d15-b94a-2c26272e7a05.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_7de28850dbdd78bacb87784f21330c50.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/c3ac7b72-c07f-41fe-8c24-ba2fd806268a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_8cd0e5177bbc74300bf79d274acc28e2.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/193e8e4d-10a2-4df3-911e-bdfa70ccc851.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_c168665f0515cd5179243ae2ef0ee1d3.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/eb7edd89-cafc-4765-8f95-b1f4c3153441.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_377940f548f0d065c7535dca97d66f2a.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/5692112b-5d4e-407b-8901-6b31852d0980.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_2a8f97cdb774f89fb029467fc78ed23c.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/7e5ebcc7-cb96-44ef-bc51-50754cd7191e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_6698dedb16a37255665070536b4a2642.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/a0e50e18-6e43-42b3-b460-8126fa35ec31.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21735/1_b0e42bdf0bb7bff8251469745f0c434e.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/7d0f649e-7166-43a5-99b9-b15504bc60e8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_e6744a9aed9696e46664ef14fb2c6284.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/4efc137c-ab5b-421c-a736-a8cdf1e9bbcf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_f10758809d7e124014a095d1d7e57465.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/2f567626-44cf-4a01-ae83-8f3a58250b9a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_5f5576e7c64cb40a88b8be51947bf04b.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/6f8e93ea-0a07-4d72-99c4-e066981d4b2b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_30a1bd2a028cf7c29dc001b539d13ed7.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/038d3429-a5d0-4127-9614-1c4c6e774f27.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21735/1_e6d43a4015f082390e4f3fc4aa3b2e2d.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/7d7a1bc1-80a0-4dfb-970b-e5134635ac44.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_6db311d0e795987b12f5c2300ebfcdd2.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/e7a85389-0841-49bf-b40b-aeac96f07345.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_7ef60fa41089f27a5d32210b74c3b885.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/67a0a92a-1331-4a15-966d-5fb352717f33.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_574be78b1f7754b5e208c020df42bef1.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21735/b0ed2e2a-c96b-409c-a6cb-068da1e5b4a6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_15d0a80f0e08faf043ab47f97f40c44c.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/0cfb4665-a6ae-41e5-88a4-2807a14bb66b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_c6fe9614ca31ced6039bfd380120c36b.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/0727f457-37dd-4456-94ed-e83582a6f59c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_e58f1b30f50a271e1adab4781a8193c5.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/efe4be70-1b57-4f6e-9080-dab8cee92dcb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_0eaf2451e827029b631a4d17a7b9d7ab.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/ed359de2-945e-4eed-afd9-ea1c3f133f85.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_e5feddc83226bad3d0893c0567694222.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/68203953-2dbe-41d9-bf98-fce17ae5eb9d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_40f062517e75c62bd1deb06fc94c4e7e.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21735/d8ce1510-9203-4df2-bdbf-2cbed1b166e7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21735/1_f0444427745043bc5e14a037a2dd9063.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 21
  },
  {
    "key": "aHhD1ukQfO",
    "title": "Living With My Billionaire Boss",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/27eb672e-5261-4d1e-874a-1d7831535151.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/917241b3-4ce0-4101-888d-ded2ef78bbd5/h264-8a87127b-013d-4698-9629-b69f270705e4.m3u8",
    "duration": 96,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/7c5c79b4-dea6-4d89-b9f6-73c1355d0979.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_ea613e736b8cd3b010dd6cef281a2d3a.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21733/d63e15268d724d33a23f8f541c551635.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_62fb6fb1d194e4f1bfcef6226a2d60f1.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21733/84ae376f25281f5eb5edc1f7bde0c4ca.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_d39af1428565f35cac8c4a8b0ec81fcc.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21733/1fedb4ea35b4e4dc9f2978d48f3ebf93.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_c918bc60ca320597e802e29cf37f6d5b.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21733/697c0d546ab3b32fd5efa6fb99350c3a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_20e611f5b2006217edff14afc01d8888.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/489ecfcd-4376-426b-b28c-e5c97b12026f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_0144c6b6310acbaa382a449ca1821c44.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21733/0cf78b1a62146d2fdad4536bcf4bd1f4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_e79aa331eb9d6caf7ff3cd87bcb81efb.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/b5349217-c937-416a-b144-2e6201ce2752.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21733/1_f84bfa9e50932a5a77f0a2128d48ff8d.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/fda11c58-b219-4646-a980-f4df2d2567b5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_29072cf06d020ee665aac253cdd54f2d.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/84c7e9bc-068b-494b-8fca-a62d0d426dd1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_06a3d08563b00c488b7fa57ac3a9650e.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/24479633-734d-4ed9-a381-e415b02686d2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_6d4b2a14a6bee53048b5a5c81627d35b.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21733/a0d774b3-d369-4184-b244-525bade54b00.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_83a585625b777e18b3c74e75448448e8.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21733/d9773e7b-b9b5-41bc-9be1-f27f844f9bc2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_5c215f677843e72da148de6e35d473c1.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/fbf63523-0892-4e48-860d-b352dce97899.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_09d8c556a2e88fad7d9831d17358613f.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/4ec44a89-4fa2-4fc1-b2b6-8acee030e3a9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_3a0bbd9b0a6f588031b7c809f47cbdb5.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/71e3ffd7-ab4b-4245-8b95-6cdbde31f908.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_7cb71169df75d4cab112eb28e10cc5f0.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/0de35e9a-8ef0-4e72-8eea-26b4d5e1b7d9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_295f425495854ebf215ce88014d94ff3.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/2a89e79e-6090-4b57-beb9-960c12f9cbca.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_bff0e6cc71ea81f281af517d791ff2fe.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21733/45b9a344-8a36-4218-b88e-f59cc945e362.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_b67241af9171f7a931e65967b76438a3.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/c7da7578-2c8a-45b9-8d69-95615b165844.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_5344d8bf292c6d0e093491a3970c51b7.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/4418817e-890c-4a22-96b9-62684439cd2b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_dec44213877a6c526d1534f2d1c46c53.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/1c7298f2-a716-4308-973b-d4a0a6918a51.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_96eca1eebfaedc40ac0704fc472ee975.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/07c69035-0213-43f2-bdcb-6b3a51aea795.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_053d7fa4dc988cedfc4e71f91348dd6e.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/4affba76-ab47-43c1-9b89-a80b6f64f05e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_61d52556e19689369567cd67342d5837.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21733/409e05f0-7049-4092-b544-46421a085ab1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21733/1_2ef01bed87637713e7e34351220cd2ed.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "dOeveHbv6Y",
    "title": "Love Was Never the Deal",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/b8024e11-30c2-4304-a73d-67237993e849.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/011194c7-79b8-46c8-a9ed-20e5e42ee6d4/h264-2d34a7ad-3e09-42b0-afad-f1be8b7d4a20.m3u8",
    "duration": 69,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/7ac1fe3f-250c-4931-a7f2-35b6928e0b6f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_0e318368cb730d155af3f00e4f5fd3c2.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21740/f99687665113e9cd66a5dc7cc40419c6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_dacb12f39d7acf3d5db7ea872c57a7bb.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21740/f586cbefeb18ed14a312ba74c92ac2ec.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_72566efab808ce609b3df818c3826cb5.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21740/048c7a3dc7096db719bbab16ed0a6d14.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_0b47cb57eb95c32edbc1e80ff7df769e.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21740/d0eef6d5ea19b1fd0146de90fda6c5c6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_da9ef8734c2f9dcdec8afacb04ee090c.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/2d3f5eb0-4f4e-48f4-937e-57c7317490e7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_f6e55cfdc46338fdabd5252fa5bf767e.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21740/5823bf6c809d67262d1d86e591be4425.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_6f92e79d333927847f0b69c0438a753c.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/2f1e6daf-057b-4341-b54d-61421b814801.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_fc0dc90884305e2c463619d3262210f9.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/2ed3b201-2b09-4a01-8f62-10bde9b410d8.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21740/1_b0a042a7aad7834e6a133bac28ddff94.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/c2c5ca92-7523-4d2a-adf5-3fe81aa589e8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_6a319a24aa14e26bbbe30111e36a98b7.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/870d538d-e9b9-4c4a-8140-9d92def25e26.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_c59cfda128a34e8c138be1048fbc4686.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/34f0029e-121e-49a6-a610-4963eeb5cebf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_09ec8a65b6c0dc2cc1f3f376d2fbeff7.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/e3658c6f-b6f5-4213-a2f7-13c7739c80bc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_ea6a386d09bfb86937ba40d0308a1c47.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/0e939c25-829d-4a8b-b021-ff5f5c2f5878.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_285d7a268dac7a29b70e13cb4cb86555.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/fb24373a-ac06-4a84-938e-7f17821bd894.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_edd3bf19df0f4e1e14565a4596a881f5.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/771d5aa6-38d0-457d-b446-1f8085dd2fbb.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21740/1_85acfe3acc1ce51a771af30ecbdf372e.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/cf212b43-be61-45a1-9628-d6f50c810a96.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_b9fa61856eeff43d99742a2557b8d77c.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/d23ce2d2-0e53-448a-987e-6d8078d3efa9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_eeb136a86565a3b97ef4d6f81cce5244.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/1c925540-614e-4a7f-bac7-8e0049ae6245.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_7fd452b51eb518321a883c7313e9ca85.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/afa51252-8cf9-4579-94c5-96103ab7aaaf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_33a90609da7c05200f5ecb7b9afc1f9b.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21740/bc69f782-a150-4846-8ed3-1930b3d26601.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_5b0521bb3fdd7092d511625ee7357eed.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/c0621648-3cbe-4a6a-a54b-13bba8ebdd01.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_9a0244d3a5d86b37b102574e439d22b1.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/2109d5c0-b5c3-4773-a912-bd7ab8ad4538.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_a095e8d4493632adfe94104fa5087f2d.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/9d31ca71-471d-43c6-909d-65aedbc2a693.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21740/1_4a11e57dc07ac8b147c761d6084198ef.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21740/ac1093fa-565a-4a34-b8af-7b6ec9f8e78e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21740/1_376f2241ede7ba4238e970659e62b7c1.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "70JWyh9aFJ",
    "title": "Flash Marriage in Chicago",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/9a39e38a-cd30-4d80-ac4a-825091a87d89.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/4527efbc-6f9b-4208-88aa-41a844985d26/h264-43912500-69cd-4e61-ac0c-aef6ac412203.m3u8",
    "duration": 60,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/a6e84d14-4965-47ec-be0c-d8d36b517d56.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/b8e74da2-4b75-457e-aa71-64758123aaa1.srt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/fee239b1-4419-4978-b1e5-19e9d34975e7.srt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22631/4e16fa27ee44f1a0e1418ce309dd93c6.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22631/f8f4c30d8262905158b7bfb739dfd1e9.srt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/adb775d0-6c63-460e-876b-338997abd886.srt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22631/aa32a9aa4f839d75aac1f9824123bc0f.srt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/ec316d2f-db35-457e-9933-adee4e1f3c07.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/fcf0a4b3-8f51-46f9-aa76-5546255ac861.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/30b23919-fb59-428f-824a-24f23ae9ef06.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/47a6c090-ee6b-4f4f-823b-8175259658fb.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/36a253f1-d205-4194-b4da-1e38fa339323.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/3684eca3-7c69-4174-a4a1-8d0a163f7469.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/43019de4-a505-4bf5-8a0d-a69cd40544a0.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/ed08549d-b078-4eba-a660-d27624ec48d0.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/a682dc7e-d4da-4fdf-81c4-33348bc2896c.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/a8e24929-59b9-4eee-be80-a9470be4a04b.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/43c28b35-79bf-4212-930f-19ca139a7d67.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/abeb5ee7-9d51-49fb-af51-f8e334178adb.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/5d475d9a-8634-413d-9ed5-228a831514fe.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/7f99aa00-f492-457b-988a-c569d3e5f0d6.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/cd570585-dacd-432f-a966-2dc7b71018fe.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/b5839d95-d706-47cb-aedc-92f127cf9817.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/0b6909ad-8eb5-498f-8ea3-5212ba389ae0.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22631/514ba77f-636d-4f66-a4e6-07d1cbcf351e.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "Qj8GNyRCVr",
    "title": "Shadow of the City: The Dance Queen Is Back",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/bdcd0a95-1a00-4cb6-a8c0-c9c73637c265.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/666323b6-219f-46b1-bb79-a81f7b503907/h264-bf905dee-606a-4c24-9d64-4660c716a97f.m3u8",
    "duration": 132,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/1a3f7070-bc5e-457b-9535-4898775cba6a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_28e89e6fbe187d9939b8bd7c3954965a.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/157dfc0b-74e0-48c5-a846-958116e96508.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_33349732d64b51d7fa4de4c1da31cbcd.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/800caa88-40a0-48ee-b357-cf22567c57aa.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_eb52dc9f61fbfb34558b3fab850f3d06.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/fe4ba16d-4a32-4f3d-9db0-3c26c7f08af6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_0311f82b3b965bd89c0d8318cddd3c21.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/3e1d1b7e-7590-4119-8caf-f1c98c9b5af1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_c738d291b7fde2e3f4d5a8fa4a7342dd.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/21666/1_1e98a02e-5b6c-4f15-9729-53b8cb4aa65b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_a6bc46df76575e8562188361186fe6f5.vtt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21666/1_4b4e91cd-70e2-49fb-a2dd-66c93662d0b3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_0608443ebe995afd4840e2df8927aef6.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21666/1_3f35c752-99bd-40eb-8516-ee94cd229a1d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_2b44371f5ee046756853ddebdb86720a.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/e78d8141-6889-40e6-bba6-e85e69dcc8b9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_276ca96fc30f50be49106ebff06f01be.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/c12bc85c-df2a-4412-a715-f120ae013a8f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_ac2bf2f9da7626870cf83d557a166837.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/fe2e71ea-8a24-4628-b3f6-0cfb92e2ca76.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_62e081b90ea747ee3193b0be9fa82384.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/8a1b5b02-ab20-4202-8c26-531985fa74e4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_aa2f1b763ccf6d4f45d72bc5499c328a.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/4bf0d0b1-4eb1-4289-96d4-2e641baa4810.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_0dac09f5369d2a9763a3776254732751.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21666/219fa6ee-2b19-406e-93f5-a7eb3a8804ab.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_06d7670c331ce9fdba21b6fc385b9aae.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/f6536a16-aee7-4558-89a3-396e4cd1f522.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21666/1_6c3a294e7d07e0b4959f65c2ff7f6b9d.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/a5f0f66f-db03-48ca-972d-0648ac5ad7b9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_f91c16f8735868a0244a4b1c4bf5ecd0.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/27b89886-0b90-48a6-b49d-bf8e04f68e1d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_88aa9cadcd3a6004a25e7371cf8606c0.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/21666/1_bb9dcf13-b5c2-4af7-ab50-fddd24bc180f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_17cd57e6243692198c81f6a59af50d1e.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/67cf95d2-a48a-424b-a459-b64c6b1a220b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_f318a4c6b533dcdd708c7b06408a6c62.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/6d77a783-4730-4e15-91f2-e2bf39ea8187.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_3a97de2d184141666565b1cb6afe455e.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21666/88874b1e-2ee5-4723-bb9f-1550450c8fd7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_9e78923c74517017be206980411ae497.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/7dfa18d1-16c4-430f-a101-5f4e676959d9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_09d950b829f11dc4ac49b948493ac054.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21666/4b71cc04-7f39-4684-b269-57fc522521b9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_98deea8e6e1956ac2d3576f441dd6dde.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/e524baf3-45c4-4dfe-9442-13d7e5b7f976.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_1a20f6faf72146587e0810c1d3edef7b.vtt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21666/4f09f0c6-e042-4e22-8e87-8d87a6126776.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21666/1_011065e8c5b70e07dfb5a66aca0cb10a.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "cKRAq10MeK",
    "title": "My Wolf Is the Sun God",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/d1d4a841-7816-4dcf-ad35-18d2ff1f95b7.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/ac8996fb-0421-4abb-8b14-ad2a47b34fbc/h264-a0dbe00c-77dd-4e0c-8790-4b4b8a7b96d0.m3u8",
    "duration": 124,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/22d45361-08be-4fa1-b31a-d352997366fa.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_b470b599-cdf7-46bc-85c3-9835426179c6.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22592/1b2b151d8309adf33bafe5d890a442f3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_4695d8b1-d5ba-4865-a58b-f690a28f8b02.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22592/b10131277472c9ff7623e8a7e8243d14.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_29d6d589-d6b8-475d-88ff-23a74cd244b5.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22592/f8ac8969bd33092bc62a372d1a48d000.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_fb28ede9-8f2e-43d7-b3c6-c9df6cf5de11.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22592/b12af4ddc929a096197beaf982e38f54.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22592/1_5dfc655b-aa14-4d3c-8638-e82903754a15.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/22592/1_f7c96e60-b24d-4975-8be4-0e24c7d35c62.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_d2eab5ece4ef84908b537503bbb69a49.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22592/eb376ba441294b6fd707336608341572.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_98ca947d-0037-4721-a951-eb70a70d1f17.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/d81738aa-4be3-4799-a111-ce9d5b8c406c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_37ecac03-add1-45a0-83d2-12cebeab027e.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/cfd13d32-0295-47d2-a345-b0ded353fdd7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_bb52a774-905c-4ba1-8e81-aa56cf7f8c6c.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/88391cc6-e0cc-4170-841b-520a9fe1406d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_41b6dbef-7b8d-499e-9295-0dc06ea8937a.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/05ea6faa-aba1-44a3-8a9f-a1d5108801d1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_f37849c5-951e-41fd-9c2b-2327788b265b.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/4268714c-dfa3-45eb-8942-e117996e9e63.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_e2c0d0b3-5f37-404f-a359-67029bbce422.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/589809ba-f875-4010-8bc4-b19a09cdfb63.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_e938711d-9951-4b57-bc24-f7eaeb046f80.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/5d019a51-7778-46a3-b67c-48c71219ca72.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_f8052d50-b8de-4ee7-94aa-bf7d769d1bfa.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/67a4cc5b-5aae-49bb-a7ac-6cd24a3c30e1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_55527c04-660a-407d-a247-5978403eaaec.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/6323d76f-a56c-4d31-92db-6a8fbee77be8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_aaca2ecd-8954-4708-982e-03048c160d9b.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/b7cc91fe-7997-487e-af66-56d4d32f0112.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_5207a9ca-e41b-4f9a-bbe7-155d7576dc69.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/a142d48e-5994-4080-b12e-472b7fb543bc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_443ac14a-4777-4636-ab04-0bf275253a16.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/ae35f8c8-8314-4964-887b-f2631c5646f7.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22592/1_d488fdab-d7ed-4686-a8ef-640d3faf0658.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/d7709d57-4870-4c7a-9489-32c1612f9e7c.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22592/1_8bf0d9b9-6deb-4b44-8c0b-a626af72c6ec.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22592/efc179f0-8618-4e07-a583-36bd13386a79.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_f8ce8dc5-6518-4686-b694-b6cded7ed18e.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/66d81a75-3920-4e90-97fd-987a78d1c861.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22592/1_3b469de9-ba84-4cae-b952-5942abc2df09.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/adef5331-e551-426d-b639-82875cf3f25a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_e23d0fa6-3499-48f0-9213-f125cb842989.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22592/28acd479-f2d2-4f6a-adc9-08464fb10529.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_43a24f8b-74ba-4ecd-8bcb-7177f397e18b.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22592/9459cea4-0b46-4f44-b757-2d90b1dabd42.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22592/1_9adba3b1-65b7-4d6c-9c9e-60df54340019.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 59
  },
  {
    "key": "GRv3JgDWWg",
    "title": "God of Snow",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/a4762aad-10c7-49ed-9304-f52b2788eb6f.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/606021c0-7ee7-4154-ab84-79d281879e22/h264-16e70fbd-23fb-4f65-b460-6ab04da358e6.m3u8",
    "duration": 54,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/37bcbf04-48de-46b9-9d5b-781824cc9722.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_eb835c2513d72c0273361e52e70d0e87.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/f3720f0e-e594-495e-9ba3-02dbad3cc4f4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_984c98eeaffb7c06841605e0e82ff426.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/7fbfabfd-78bf-4924-9acb-8085856e9ebf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_71c7b52ba86b32fa7e305a4e43b5c5ae.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22381/5c314eaf648a380a5b33b5f557dabd1d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_ae02bc3b37846ea600d933d5a60371e0.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/22381/5396155b196c430020656f5ea95b3bf1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_c1cc2cad615b13ae2e0a809db738b02e.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/7eddf812-15aa-4ed9-9e40-7427bd194c30.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_289b12ac664c39bf9a591d7d4863345c.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/22381/64a42af434519b5fe77c401ce5009548.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_6944192615854502212e99ea15e02481.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/097dea19-8fba-43be-bf12-498f8a83c2c8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_02687c5c364b2d79a434cd92d4307d38.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/2596ba4b-f808-4e85-bbde-66edb3703380.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22381/1_3f1a9bd2746a16aef022d17ebcf99c60.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22381/0edb118f-0a1c-4fb6-ad47-f5c9cd943645.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_54fddce4cdbc3bcf5af34609a261d032.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/0134f818-821e-4240-bd96-8057f60719e3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_49017886ff0d9bdeacb1ba3e92fe9c92.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22381/8a322c1a-42b9-4568-b8bf-0e489bda97da.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_d9846baf742a9f9f77bcabefa8f7c1f4.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/8fe09970-8e48-4f15-b5ab-440686c890f1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_dd09a8513919945a3b4640b7e0301573.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/13334c2e-f4de-4d5f-a5bc-9b1a215957e1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_2d2a44136acf624bd16d0d920a874891.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/79a9329c-63b8-4d4c-8418-64d0379ee99e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_40057ba631f8eb2db8cf733d4c1c966e.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/8d2d3bbf-c1f6-49c9-a0b0-5ccf72bc0877.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_4ff339c29db994f4fb2bb1d106523ab2.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/5fb75b28-5a5f-4fff-ad91-24b16475d72f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_ad15b962f62e926cba02a63276d317d2.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/d408355c-cb54-4099-bbe1-84117485dabe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_66c314a6b132c57d35141bd63014d83a.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/c94b8b51-c78c-4b3e-ac03-6cd6fe2c56bc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_598b298693ed279091a7595ac21cc998.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/1d72c52f-ea8b-497d-bfa2-b5da1fc79847.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_c26ba08db6be68079a9f276e6043b6c6.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/95ef752f-e366-45d6-84e4-2ca04045d1ec.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_48211e8fd11bb4976e84bf2c434bbaff.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/a8976003-173b-4baf-a3ef-502f6d51ce40.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_a636307779781a59a62cdf232ac2e513.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/98eb7e50-830c-40c0-9e8e-b0c4e9c27e93.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_a4d7bfa5e85284e4031b23766ccede9e.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/7099eb82-b72b-49d9-8e8a-3edf794fd098.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_2191ddea4945aee658da69cee5df29a5.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22381/fd615380-f3d6-4b28-bff3-f59a4c64864d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22381/1_213ca39f05fb4ce6ba2e0eacb7c0d240.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 40
  },
  {
    "key": "e3IsvNKMYM",
    "title": "The Phantom Bride",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/16366fbf-60c9-490d-b427-bc79a7dbe7de.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/8564ced4-dd5c-4d1d-b82a-a20c13bd16be/h264-d0267fb6-2e7a-4762-b51e-b828c35ad068.m3u8",
    "duration": 82,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/4df8f0bd-dc88-4018-8bd5-24b0b3608221.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_ceca2af2f83046f501281822992e857d.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/c3e92753-29f3-45d7-b714-562ba025bc4c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_f36e82d70a839af4218294bcfb6f1167.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/fc63899b-971d-43b0-8c28-36098d718b1a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_b9750f5dde361866f86ddb1cf0399173.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22303/8ea3a037-c66b-473a-ba9f-40e05c8a495c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_dc8a2ce912c4abbcf338616fe6fc4186.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/e0a39797-2c91-418d-b81d-d5ca860e2396.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_cdda7985e3916d86a1a5c6acc5e30cd0.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/vt/22303/6fed24f5-93c1-4a2f-ac96-68a0db73935a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_6f5817c40159e9ffb155bdd52fb7b623.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/03612108-5bb9-4f8a-9f6a-9162ce2e745d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_8cbefa777b4af1b002d1b77067db42f3.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/9ef633b8-24ea-4084-bdb3-1ad74fee28cb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_e6a8a2b5b9f1819b87f2550aeea56301.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/70132285-e879-4c88-849e-d8e8f6f5734f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_e9f968f1a405055c5cc66a9afd2677fb.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/7b5f4f22-33df-4f89-8006-bad330eca581.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_b2db01ec48ab22f46a978776b8ea4806.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/c02f8f0b-5758-41b4-9c52-33907c5007ae.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_fceb0524aef6bc870c9111d2abe5b3b1.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/8b530cc6-4da6-4c6c-9037-444a71328f8d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_a26a0d19c9f4073efd132bcfb32fe813.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/ae53ac26-2bb6-4ade-9cc0-7da56e058aaf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_3c2c339969175269e4c449aa8aca421b.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/3c78659b-6bc7-4f59-b606-2970e380c287.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_a54e36b150f314bd05921340b0ee1a6b.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/c2f6974b-0e13-45f4-ac15-95a4e1ccb8a4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_0a9858060f8a3abd8607f1c942891737.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/d316f8ab-0b7a-4f38-83b8-583163fb6179.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_036fcacc5b9944c38a2c9173c42cbc2c.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/685d17ed-d150-47ec-9f17-08e104810c7a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_c06406b0fd6476c30570cd07310be1dd.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/9545582b-5d89-4460-bfbc-5388b2d75d5c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_d243919ee9c1a08c3d6d671023c9e6c4.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/424a1653-38e0-4de0-93b0-cbe47b4e5ec9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_4e627810d4bff4179a364434f8e1ee2f.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/48c65ede-0f83-47bf-8d72-1c08469b75f0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_acf1bf6a7f517e096e0f2c645bb8dc7f.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/f876e2e7-1e9d-459d-8f60-b831010e4c56.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_8119d3a1ee6c5951a1371bab8f660af9.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/2deb271c-073b-47af-9e22-e762c3618dec.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_7b733f35578ba71090395da4b7fbfe14.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/6ff4b117-179e-41a3-af94-b52f473abd87.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22303/1_22334fdd709d972125541c0d5ed99eda.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22303/23ab528f-dc7e-4304-b1d5-f0e7944d48ec.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_670f3d435d96824b9798ecb3e0d7b824.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22303/644479e7-7c6f-4c74-b766-7b1471b81b1b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22303/1_5df90b73e6fb9bdebef458d6d498a9d2.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 38
  },
  {
    "key": "eeLcbQvbgG",
    "title": "The Price of Power",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/14f2e112-a9fa-4cc3-8bc2-83193e673b03.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/5d01b9f7-ae49-4fb6-8f52-e5b9841e64c2/h264-b7aef494-0574-4fd6-b552-b9eff9eee069.m3u8",
    "duration": 59,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/19a973a9-985e-4e40-ab86-39cc0d451dd9.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22260/1_2b903f24c93d6547ea1dc7c2c326f5c0.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/a3395098-8f32-4826-a369-e1252852fa1b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_c7a3082e6f6fefec1693788bbcef1ed8.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/1294c1ad-1a39-47cc-906e-939131592562.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_82d8e304dc10478cf0456cde266fd73b.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/93031f22-feb3-43d1-a9e7-ef1f1ee955b5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_d49f4dc32e0169215129b1f18b0f0209.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/f5f9f6ca-ee2b-431d-bfef-3294357b881a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_2e72f75fa9622e9ba1c6f809d756261e.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/22260/1_7e5c5672-e6d5-4b85-b07a-69994e6addda.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_d3e3ae025109e6bb596be07e94c64d6b.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/4337dafa-902b-48a3-8ca7-be9b1bcb5b81.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_bb996943307bb4ff9fd8883c8469b920.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/73d43868-51c6-4231-925f-2d48a9cd409a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_ef0225d1d84c18cf031203ee85615469.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22260/1_c22749bb-1fb4-46b0-92cc-ce3b6fac0822.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_47e7cb2a8364bf7d8e24fbd96962051d.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22260/32957a11-5527-4741-b498-9bc59c82d215.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22260/1_d22f1d6dd3124f13cd1bb3dfe6c8a705.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22260/46c5cd88-c232-46c1-bb31-7c96c2681ad7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_f2de73595829cb6de1a1667b356b625f.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/e979caa1-d6e3-4f37-971c-19eb687ec805.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_f40688f6781c3d86ec7a0da1075e174c.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/4457cc41-0885-4b78-a4dc-a94f3d243535.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22260/1_a8da0538f08dbc867b4cf3005869508f.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/4197741e-d98e-4a9d-b7b3-8892e6feaaeb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_3f881d6eb90a74e6ca01973981f293bf.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/acb9313d-0259-481e-b62b-91662b6389d8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_5ca5d88c84cffd18f1f4bb1bfce6e3c5.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/074137f1-a02a-4603-bae3-9a765bcfdb9c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_3bd65b5dc86374e1e4e254979d5762ef.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22260/fb764b86-c5b2-4d72-8122-6e58d83492c8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_b571decf1ed3681801df1b8ada680812.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/defde141-ceb1-407c-9674-98f814ad8e3d.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22260/1_1f5b02f5e01c8457547ce7f64c65fa18.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22260/1_4e634579-e7fd-463b-b2c0-23ef69bc83a3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_cd419b9143d71ea5553c4784af14bde4.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/850f9b28-2f7b-4f96-aa42-cbd05abf0db0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_17021e4b1a4614744cb3b633d45b218d.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/66306a32-832e-43e4-a800-7c67aa29390b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_427c6184357ac98f595e466c3688112b.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/00f18e3b-4655-41fc-85a5-470ffe6dbf4f.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22260/1_760dabd395a023665b9b12dbaf20fcd8.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/641a29a1-f319-4543-8c41-5039bd7d1643.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_26030a0ddc7cb97ed85d6e14d1963e06.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/411f39e7-bf86-4aaf-8a16-d93197096901.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22260/1_f4a8cb0de5f6c3761c09a3d7f38250d4.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22260/f6be6bc0-ac9f-4eb3-9e48-113e13133e66.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22260/1_19f7030a23b755ddf328dab9871a9d03.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "gJyQt63DvP",
    "title": "An Intern Worth Billions",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/05b0522f-8177-4d1f-a7a0-cfd49ccbe44f.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/8e858445-cd0c-4694-90b8-d440f838f548/h264-e0c45d83-bc48-490b-9d29-90a2ed7cd766.m3u8",
    "duration": 101,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/2c3c8507-cfc8-4c12-a926-ff9c96c1d331.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_b06b00537382556d65cb0e1afe4dd978.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/983884f8-d49b-426b-8623-7189eb9e39cb.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_0339580cefba9480985d4fc1f54f6349.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/dd921fb8-d64b-4644-8548-e68a2090928f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_2e48109c97ea448a6f48340f3eb87948.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/7711bd26-195b-4cbe-a267-249a2892f76e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_f3066ec9cf1de9ff4c85b50d1b2b0ce2.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/5ec59c61-4239-4abf-a6c6-d90ba8fd6b99.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_0338b32a6731460870dab1460ccacf2b.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/vt/21734/d89f98f5-1e0f-4e0a-86d2-5feedd63bf87.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_85a043cbd006ae27174e395f540f9980.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/74f7a0e3-8daf-4292-87af-73ff897e05a5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_c4a393cb3014c5c7b017201a93ed3913.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/aa089432-d3b4-49a5-b4d7-0463fa8ae0e3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_4a0ce63182f04ff57fb5ed18ab3c938f.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/81f830a3-3351-4c4c-bafe-93de81345f71.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21734/1_c696db836cac8c9b98e5b46c73b0a531.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/b2afbebc-1ea2-4928-93d2-e875802efa4a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_909768978c50c18b4cf9e85b9c668922.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/1e21254a-f5ab-4d2d-ab56-7625220c706c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_12304bf6eab0d9e3ed2d3aa02af7afb9.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/99dd97e6-ac74-46c4-b6f6-c4a1d818034d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_a14b755edf5d2de73d0f8b6c22f87f23.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/29c8fa7a-d507-44aa-8a02-053265670e8d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_0f979f51aa082ccf02a17a0a197eabc5.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/bb37776c-7da4-46fc-ad02-5fbdc33e5fb3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_31352c8985b96b3a07cc7c613a225cee.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21734/267fc8ce-9fdb-42d2-a7f9-ce331a1b189c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_a46eee17cec548f9b059d72c8e7bb8f2.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/cf0be049-fcaf-4ada-8bb1-1eff392ff86e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_8b438c53e0b1880c46551621cddc82d7.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/c6e1aa43-296e-417f-b262-abaecbcf64a9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_30224002fcd6fecff5ffbf6c18a53df8.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/71fcd795-ea99-42da-a61b-7f26e43cce15.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_35e1fbd92d42fecd1649bfac9fefad9c.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/90d8cd54-e2d2-418a-8ca0-97571e3b1dbf.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_db0e9fdd10697d3b56701f9c8a5279c2.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/d501dadb-1b75-4391-a7b4-f1aa7f02636f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_d39a21c50d5caa6e180252736c74c316.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/58a0c32c-901f-4596-b106-afe0134775d1.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_d0304aa16134d04717e255422980621f.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/87b7b210-8e2b-43f7-b322-36d02448c3f6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_6f145e21e6c5bcf73e3307fb7395722b.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/d79d2320-13a3-4337-af9b-a88e1c983f51.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_4c4f4a8f6ec57bffb3b114c79e0be492.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/4dee4343-8074-4d29-98fc-346f9d5ff3d2.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21734/1_b7dcd46dcf4099230d66654c62f1f108.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21734/45f79858-638d-4d00-ad60-45d6c504e84d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21734/1_dd9c47758afcf04fac0410f5b9940587.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "EtN3hX1xVo",
    "title": "Hidden Agenda: Game of Power",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/bb18194b-c4a2-4184-ac6c-3ec390e3fe77.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v1.mydramawave.com/vt/6ea699fa-ba76-448e-8bab-f7daadb57a33/h264-7b3b4c7d-6038-4b72-805a-b13ca3f0a449.m3u8",
    "duration": 60,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/6555b29a-589e-4061-9bfd-c44aae6f3d71.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_0c3c0e44c2af2532113cb27413195e9b.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21737/e157ceb9-85eb-4d12-9475-55106a867df4.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21737/1_dea0b5c619cf36c9cc1fa5543ec921f3.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/25218fa5-d386-4a9a-a778-d0e58103be9e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_a894014f7e0cba4112c3e61dd2353036.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/7f62386e-0628-4f64-a4ab-df5f75b02d69.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_31c3b50ca90d915734cacceecd414b6b.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/24b60cef-2e46-4406-91c2-be0d49dcad75.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21737/1_ef995cc3cc9b68ae48b5c1d4055a61bc.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/cb02a390-afc4-487c-b93c-1a908da71a2b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_a45036c4fa67cbbcf703c9ae95a943b6.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/4008987f-7cab-435b-9d54-915071c158d0.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_9aef80d63b5485428ab7ecd0e4e40561.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/96bc8f13-23da-444b-bb55-658fa0ff9004.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_115f773a2ec2b134ec8163fe2e85018f.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/bf93cd66-b4cb-4b80-859b-8d428aab75a3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_478022651e0e1c974d50d43978d92698.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21737/7aa1f033-cf77-4226-83df-f2ce8fff8d09.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_5066c12e98dfce5a37ca66579b62a3e0.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/736dade4-10c4-4278-a6c6-ea40760d203b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_97daa3ed6e6637525058905d9161edc9.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/773eb483-0360-4527-ac37-33b63e0d1885.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_6c52f361034a296873e8babbe90fa99e.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/124c6711-d906-4a33-9be3-89fa32161ab8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_c6b0a4fdd19999f3d0728cc08f36880b.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/a641ae15-db61-44ff-a7d3-1cb522c2c028.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21737/1_22d117f927bebeb5939f509d25228977.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21737/c9231b08-1a82-4781-bed3-d5643b3e063f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_d9dfd879215f3366e1ef4a58f68ab11d.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/46b26a72-5a62-4d4c-be80-24900ab5f093.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_65451ff6f0f28cba1d32abab4d463ff6.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/5f3b7a34-bdbb-4197-b268-723c596f949d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_003383c07cb900b567c0dd1c5f280adc.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/7f2a5185-7fce-4759-ad78-0afcccb36481.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_cd38c94d8e6bd0e2b9bbd447dcc19b75.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/c41fb8c6-c918-41e9-8315-ebeecaaaef0a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_8fce64e11dd251ec55ba9c71f95475d5.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/29afef73-d429-47b4-9400-2b4f61a16a27.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_cf5a2380c00c2b9d587bbc8e8df128e3.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/ccbd5696-40cc-4d27-bf9b-47251e6c2a83.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_d827b7c14adc0bbd28f45a12b4b8e128.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/21737/c7c473b2-62f2-4e43-9488-025835506db5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_d4ea4500d54fd682997dd2885d8fb7fe.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/b3c60465-c7d8-4221-a2c4-0d5ea610b640.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_e5de8c6b30fe0db4c40893ee7e4823d6.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/bcd396a7-fb9e-4a69-8f13-7a5682ae1a77.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_2f9a8c2fa2e8676108f2b17c6a1cd613.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21737/d3f306d7-ef18-49c4-88c4-d118900f1915.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21737/1_290e6b8a5e227f55691846a4f6e4a6a5.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "GG9HOqWxSm",
    "title": "The Exorcist's Romantic Adventure",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/3621c955-6f95-4de0-ab6f-294519ef5a0f.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/3a9f0640-35a5-4f54-8d11-635a2f738406/h264-0bdc0cdd-83c7-4a20-a546-dfb8fdda096c.m3u8",
    "duration": 181,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/f17d7960-369b-491b-840d-6e98b7a52aff.srt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/548d280b-b8fd-4e2d-9b38-d6a7014c1234.srt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/57dd960e-9e47-43bf-baad-e2d6da3d0e07.srt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/2dfc109f-7129-4c36-be3d-4405b7c5f13f.srt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/ec84361e-5d36-486d-9a65-6a7869ff427c.srt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/b44b1362-bd12-4937-96aa-6ee9f979da90.srt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/53fb58e3-5cd0-4a57-9399-400b0f71d320.srt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/28b98518-b5ca-4279-ae61-f7f6d71f7fe0.srt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/e21c600f-20fb-4724-9087-516cd64651e4.srt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/1bf071d1-4640-40ac-989d-160589c0f244.srt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/dce2b4b0-c9c6-44fe-9118-9dd0e93b0191.srt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/e9fa7a2b-dd5e-4718-9215-b34668f4f5fe.srt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22689/266b2b15-f383-43b5-9196-7367659c980f.srt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/b5c0d5f4-b836-4c65-b913-9042a8810076.srt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/57b42538-ea71-496f-83a6-fb8b3388d292.srt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/87b13129-b1e7-4637-a46e-bc11c1a8d70c.srt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/20391ae1-5269-4a8f-9eb3-d249b964316f.srt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/a9cf1b9f-e4da-4f66-8c72-b56e3da8a3c6.srt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/9449e86b-2722-4fec-85e6-2cd69ec5fe19.srt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/33f31736-fb9b-48bc-af12-11df89c70c12.srt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/3c7e5933-0a45-4a79-86a2-20b78e900a3d.srt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/1ece414e-be65-48ff-9556-141ff6311af7.srt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22689/ddd9e910-f795-4177-a8ac-748c1c6e7d8c.srt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22689/67347dbb-fab7-4f48-892e-7bb49a773dd4.srt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22689/5c5a7d53-707b-4360-91d7-a8f3c845acce.srt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 48
  },
  {
    "key": "OZqd8jOdHK",
    "title": "The Fallen Demon Lord Rises Again",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/d29a39a4-0bfc-4cf8-8db8-99c3178b7c10.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/e971a1df-6f39-4c89-b4e9-c7b6b5b08c0d/h264-cd990418-60f4-419a-ae9f-d8d1357a17e4.m3u8",
    "duration": 107,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/baad86be-67d6-445b-b857-ea8fd2362590.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_70923aeb-f3c3-4063-8d57-7f5166cdd033.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/de48b315-a1f5-48ec-8e84-2a432c749181.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_067d1fdf-b726-4b70-b6b2-9a71089f72f1.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/2546adca-df9c-4a4b-b5dd-4c58dc0cf006.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_32a0bea5-66ea-4a8f-beb2-e0d8647eb527.vtt",
        "display_name": "Czech"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/f819ba74-ae66-4cc3-86a2-24e7dd4bef49.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_9d038415-570e-4c04-ac3b-479b1a33b3a5.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/63865cec-d539-4272-9ace-36edd7747cfc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_cbf23d3a-4ea0-4dff-b878-cb7f717e28e0.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/22068/1_314c5fda-34af-4ab7-800f-6d91a8cc67a4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_17323db4-0c0d-4680-9bf9-d15f90ee61d5.vtt",
        "display_name": "English"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/204216b9-f6ea-485c-9b96-7460e1f4e919.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22068/1_ebecea7a-6d31-4fe8-8003-75489bf013ca.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/4442dee0-1fe2-4609-b921-9a0c0d92eec8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_37ee217d-1e26-401d-9c1d-6536fc128a7c.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22068/1_29803602-930e-49cd-a039-56ac192791e7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_e3f6b97f-c61a-48c3-a6b3-7b24d328a036.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/1df0f2b0-876d-48e5-ad2d-90e55985b1c3.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_c8286183-d12d-4c0f-a018-1e2bfd11ffa9.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/63c413fa-b108-4a8f-acfb-cbbd01f29db9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_c5b89650-bb31-4d95-a6ce-3ef844c90e2c.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/77a32ae6-3ef8-4ecb-8aa5-24821373cbc4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_73e60aa3-d57f-4627-bdb3-65cb83964b12.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/22068/2e93148a-36dd-4d24-9d83-6b92d8dc09a4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_bcb1eea1-1212-414f-b5f0-485fcb8230d4.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/6cc8d7e4-00de-4066-a023-59d3e35683d5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_43dc4935-c43f-492a-8af3-658597903846.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/c1f3cc35-2d56-4255-ba4c-658e51f54dbe.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_c29ba440-6bbb-4397-922f-d50c8106daf2.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/fd73341c-ea09-4683-8583-3eced3971004.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_6cb81e68-ba7c-43c9-81af-a4be03b9bc99.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/6d7bf0df-254d-4870-84d4-874ecc1ad789.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_944ce8ce-0f45-48d2-a05e-81f6cf721f51.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/5046eb39-6670-4720-9418-acb07a594733.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22068/1_57f2c031-7d58-4b52-bf52-1e2d18a665f5.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22068/1_3d6994ff-d2bd-4d37-ac41-69f4808a02f3.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/22068/1_56ecf6e2-81e4-49c1-bf69-8795f63351d1.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/3659eac2-6b05-41d7-8976-ef2e4388a8ae.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_1884dde4-3c42-47b0-bbbd-070f3819937a.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22068/1_0d0c216f-c684-4b93-b54a-0031eac06824.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_a14edab5-ca33-4f2d-873b-16ef282fc358.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/2cb1a878-71f2-43e2-9c5c-d06059ba857c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_4e1c859e-7c50-4c3c-a055-78420dbf8dae.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/38c05c86-fd4a-49d9-ad48-468704ed81cc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_219c7665-ca7d-4d18-8104-a85c9b49c0a7.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/22068/1_6ec3d849-7d59-41a1-b717-6d5e6c6b64ff.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_7ca6da92-c217-4477-8eb5-1f07884c0a9d.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/22068/ec0088bc-e7c9-42eb-a488-5d28bc302b0f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/22068/1_d420080f-eb57-4895-864b-7da23f9bcce4.vtt",
        "display_name": "Greek"
      }
    ],
    "episodesCount": 13
  },
  {
    "key": "zOSPZNvwJa",
    "title": "From the Cave to Riches",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/11f1a2ba-2254-448a-8286-69c58a5d4314.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/31301023-468b-418e-9f56-320afbd1769d/h264-a9df3666-f484-4854-8ae3-8e22ada41068.m3u8",
    "duration": 96,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20795/6ab4ed2e-bc38-4d00-8332-95640aa8d912.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_f7c8c630-5587-4de7-903e-179343000b50.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20795/bb464454-8333-42cf-a652-25481bc6aa08.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/20795/1_e24c31b4-922e-44f8-9405-eb333d487fc0.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20795/c5d34efa-ba5f-4a99-b09c-8fbac8bdab24.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_3a370ebf-b890-4cd5-ae1a-7b22418b4f3a.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/ut/20795/1_588ca2af-333d-417e-814b-f29e4ae6c064.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_de279fc7-c469-46d4-a0c2-92bca0f64ec6.vtt",
        "display_name": "English"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20795/baafb1f5-8dfb-49ee-9f45-301f9c46f3de.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_9b5cead9-9163-4b09-a4ac-89acd780f43d.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/20795/1_086cbef2-a0df-4e68-9f21-eba0296f9336.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_83681ee9-6f61-44c6-98e4-d4e845a5dfe5.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_7ebaf11d-2c1d-4b84-b8cd-b12a543afa46.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_6d0e8ff9-da45-4fd0-a04c-70132ad1839d.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_c9cc22ad-0145-4845-a1e7-a136d8978376.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_8f17f6f3-5e8d-4806-b542-c4377796769d.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_e8c0bc47-0f31-41ad-885b-7fde43bd75db.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_b806f046-8494-4d5a-9392-cdf9f5fb313a.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_146297f3-394a-40c5-ad10-2276ba40d762.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_436d30e0-2b17-4734-a7ed-9c9c07de804d.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_e0c1246d-1dd8-41fc-9c3f-32999c45a824.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_f919098d-a255-4d12-aed0-97fe06f7df41.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/20795/1_871a1dd1-c921-4434-83d9-3337a7a08df7.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_3dafed81-9806-4e0d-9d9c-baed6e989252.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_f4b77a8d-4f65-4111-b108-032f0f848dea.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_1fa91fd1-8cfa-4ca1-94c5-bbbaa7baac3c.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_82792cf3-167c-4565-841e-a07891f2e94c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_a9e8d5c5-e1c0-4635-b0fa-31ccbe4fb16c.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_897f68f3-1d18-40ee-bb2b-6ff9f02ec2bd.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_d0417a26-fa43-4774-98af-fe293a64277c.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_fa0e268c-228c-493e-b9f9-d26a12097509.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_048fbe7c-a364-4225-939a-c52cd2e5f7f5.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_9bc8be44-e1de-4865-b45c-2b41b4412e91.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_0ca029c6-ca72-483d-99d6-dff0cfd476bb.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_f76c5c41-17d5-4477-b625-fe3f2158991d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_9b092d32-f0ff-4f66-bc18-0e32d81eb257.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/20795/1_13e0b48d-c7e0-41f7-b2ad-8b34112d1a22.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_3667f40a-e726-4b55-aa35-6a2a298c628f.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_386947f2-1bd7-4fa7-80da-2ee54f3c58c2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_fc95d7e7-ef93-4a95-980f-34ae4f03d9d1.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_87c2e945-637d-41fc-99db-3fe799b63158.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_593b5967-71f0-4089-a0cd-b4a8aae658cb.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20795/eb84733b-7e50-4b2e-ac33-888b64d5395e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_b303187f-6d0a-4b9c-9433-f0d7aa0b3a8a.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/20795/1_9a65d4a2-ce8c-4896-afb1-9b083949f046.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_768af7ac-ff8d-4464-a039-ebe78e4f51e1.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20795/fa7f8b45-6051-4fcf-84e3-19d5b570bf90.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20795/1_2ae504b1-c8ca-4f8e-8224-62659c2154a9.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 30
  },
  {
    "key": "4XfqaooNxf",
    "title": "Zero to Zenith: The Magicless Rules",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/fd2ebd3a-8334-49fb-a55d-d334fd972b4b.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/9cf51f7c-efe9-43ca-95b2-552cd2d3acf9/h264-68aded95-a437-49d0-b9aa-3f3084212ee2.m3u8",
    "duration": 167,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_c86921e0-8906-40c8-afc1-5cabd00bfd77.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_461faaf8ccd0ef76517c9203526a5666.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/54cb9142-c359-4357-a069-a59f5375d2fd.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_274703908ffa83acebdc07ec229f44f9.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/3186d4c3-54b5-4037-9874-76acd1daa81c.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_bc73a410a91b5979bad7a429a6c1eb6a.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/23e7ae46-71bf-49aa-8d24-0f2336095769.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_4385d716bf6eb4c819798ae6d4dfc0ed.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_208606df-61a0-4fc0-889d-f3ce091c3707.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_a90be804829364633d3afd1085a0000b.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_d3cfeb8f-de30-409d-a859-b7f3e4065498.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_d42e9eadebbe033ebf3543055fce1726.vtt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_265c4b33-34fc-4226-841b-649cce740532.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_cef4d6168da587aa7feebfb173f755cb.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_da126696-a1a1-4844-a466-043d592cc089.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_2d9e0dd7a4514e35acd6823bdaf42ce9.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_6c7cca92-a11e-4534-9125-e27b63d9ae50.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_7095febd08c9936d45e77ed95326c22d.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/44b99e565dc822ce92e81827443439c5.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_df0806dc03b0a43a4c54264d56848890.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_c54a61f4-5ce2-4d43-9ba1-05f3b0316a87.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_71bdeaec6b4b8896a21fb7e96b3bd4ea.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_9dc8ed3f-9761-471c-87c6-33647de5d7bd.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_661c47f73c9084c0b7e653d82ff5e592.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/8e1e2e90-664a-42e9-bf1b-125b5fdbe518.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_5319e989554c7b03ab99d8620d07b619.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_3a41666f-0594-43cc-abd7-499f4ce9879a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_6ac8b98106e3deb8934189984f502fc4.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/26c1f1fc-eafc-4e34-ad47-6a33ae4abc83.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_690c5d1e584e51bedbd5938961e3ad70.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/a0dcf83a-af1d-4345-b39d-2a0e52bbdd2b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_3e3296445fe7ba9611dddba8f9c68fc8.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_a398afab-1439-4124-9dfb-be66f8471f60.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_37a3a7b407b370bc6db83c496782617c.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_c808f06a-def9-411b-80a2-93e2dcce6a67.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_e0e3064af7a8425242afdf97b9267722.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_37821a91-c5f0-4f1a-8bcb-0e68235c7b19.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/21647/1_273f1fed3819bf46437b1de01c5c0894.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/9c088afea7e40317f000a6f3ee1e945b.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_03ccdbdca349a09dbbca52246176a153.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/fc520836-d4b9-43c0-80d7-80d5c5181dd8.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_2c7f82d591cdb564f78a9ab66ff9a888.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/303b9bae-d7e1-423c-989c-b3adb9dcdece.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_c9d9fb66c835eed250c736c6f9ba4efa.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/ut/21647/1_d09444a5-06de-49ee-b0d4-9f634b68cdf2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_f4c20850d7759fb56c01d957b4895183.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/13aaa3e9-5df4-4847-a46b-cdf9e5409cda.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_511d63ff99b27566fed0ef12eda11f56.vtt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/21647/57b84588-38ac-4a55-8736-55b079a45c19.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/21647/1_859fd3d29ed188f8ffb3bbecd93e8a0d.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 38
  },
  {
    "key": "WJMDa582CP",
    "title": "Your Highness, the Witches Serve Thee",
    "cover": "https://static-v1.mydramawave.com/vt/prod/cover/230465ea-7023-4d45-894c-42b81734e504.jpg?image_process=quality,85/resize,w_600/format,webp",
    "stream": "https://video-v6.mydramawave.com/vt/20803f03-b40f-4e2a-a19a-46af91341f58/h264-d5b7b95d-5e71-47bc-b50e-51a04bf99cad.m3u8",
    "duration": 113,
    "subtitles": [
      {
        "language": "pl-PL",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/ut/20937/1_c4030549-4f96-47d2-8347-b6d899e589ed.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_ce4aff201e9ac5475f9cb55f58c114f6.vtt",
        "display_name": "Polish"
      },
      {
        "language": "bn-BD",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/c21462da-8921-44d2-bc8d-57bcf6e2a7d6.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_27188a29-0800-4a97-aa95-7237796c43ae.vtt",
        "display_name": "Bengali"
      },
      {
        "language": "te-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/d173162d-46c5-4510-8638-80541e4d8bff.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_2dc940ec-c256-4ed0-a323-6aa3f9e3a64e.vtt",
        "display_name": "Telugu"
      },
      {
        "language": "ta-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/c0044961-3dad-40ed-bc2c-03d8ce96cf56.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_9eeba5f8-1b4f-4c34-be0b-a7753f7cb03b.vtt",
        "display_name": "Tamil"
      },
      {
        "language": "ro-RO",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/6f1080d0-3665-499c-aef1-2601081bf45e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_2ea566bf-eab4-45f2-bb28-fc92b7a4a596.vtt",
        "display_name": "Romanian"
      },
      {
        "language": "en-US",
        "type": "original",
        "subtitle": "https://video-v1.mydramawave.com/ut/20937/1_72afd555-4980-466e-8032-b8d52835cdd9.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_c3683b326e5631d58ccc1e84ee2b0441.vtt",
        "display_name": "English"
      },
      {
        "language": "es-MX",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/997b9a2e-afde-4686-af22-74b4032feebc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_4956efda-e4f1-4106-8a0b-dae112c6e74d.vtt",
        "display_name": "Spanish"
      },
      {
        "language": "pt-PT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/12ab58de-07a4-49bf-ab1e-e9880ce6f89a.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_d18c8d85-2bca-4a9a-8931-da644e7dfe7b.vtt",
        "display_name": "Portuguese"
      },
      {
        "language": "id-ID",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/ce7f9ec9-a6fc-4057-a42f-82215fa6ec58.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_e0742846-1558-4e32-a99c-35c07c6feb0d.vtt",
        "display_name": "Indonesian"
      },
      {
        "language": "de-DE",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/275ca0fb-41de-4bf5-a8b9-b265dee965d4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_4ec00c4c-4269-4efe-9446-0c54d7734e44.vtt",
        "display_name": "German"
      },
      {
        "language": "fr-FR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/ffd0a2b4-ab88-48f5-a8af-3d6253cff37f.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_97749a05-6ec2-401d-a1df-41e411c92c68.vtt",
        "display_name": "French"
      },
      {
        "language": "ru-RU",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/b4b6e983-2de2-4765-a2f4-876864c525a4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_60d88ea3-b75f-4ce8-be6f-d6720b43bc37.vtt",
        "display_name": "Russian"
      },
      {
        "language": "it-IT",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/1fba0979-242e-411e-b7f5-c6f9d1d4b7c2.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_2f1d2405-d857-4e41-b7e0-57c2e8bd50bd.vtt",
        "display_name": "Italian"
      },
      {
        "language": "tr-TR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/ef88226a-9ad1-4e83-9dfc-1e590bcff728.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_4f55a591-5dc2-408b-a6ee-f272d46513d5.vtt",
        "display_name": "Turkish"
      },
      {
        "language": "ja-JP",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/0f581554-3f83-4661-97a1-6c68a1e39988.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_493cb971-5484-49fc-925e-4040697f7feb.vtt",
        "display_name": "Japanese"
      },
      {
        "language": "ko-KR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/9a377a70-115f-4f84-a5f6-d696d6ec6e43.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_45a5daf3-3345-4aeb-a7a2-1c1a7b5d65bd.vtt",
        "display_name": "Korean"
      },
      {
        "language": "th-TH",
        "type": "normal",
        "subtitle": "https://video-v1.mydramawave.com/vt/20937/aa3cb947-5c8a-4bd1-bc92-fc49f29d50a4.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_999430b0-7d89-4e01-86c3-6ed5024d4417.vtt",
        "display_name": "Thai"
      },
      {
        "language": "vi-VN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/067f820a-f7e1-4b3f-8edb-6682b331ad2d.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_b7552eca-a518-4234-861b-b22afa71bdd0.vtt",
        "display_name": "Vietnamese"
      },
      {
        "language": "tl-PH",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/1d2ff91f-3d04-466b-9f7a-34c914e05179.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_dc2f32e0-b184-47df-9bba-e4541fe4d587.vtt",
        "display_name": "Filipino"
      },
      {
        "language": "ms-MY",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/2fb5c4cc-3c42-4533-a705-54cfbe6d9aef.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_de68051a-f445-44ce-a933-1b746a5a417c.vtt",
        "display_name": "Malay"
      },
      {
        "language": "zh-TW",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/98df934f-0d61-4043-b1dc-2389643bdaa1.srt",
        "vtt": "https://video-v1.mydramawave.com/ut/20937/1_abe6bcde-3685-4868-a165-8f071a419945.vtt",
        "display_name": "Traditional Chinese"
      },
      {
        "language": "hi-IN",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/4c2cc13d-7835-4878-a307-5f88dbfca41e.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_3e89c964-fd5f-40d3-8be9-e49f02232daa.vtt",
        "display_name": "Hindi"
      },
      {
        "language": "ar-SA",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/a583c0e4-3d3c-483c-80ec-4a20d4ca2ccc.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_cc4d8570-6260-48ef-b720-f70ca375141b.vtt",
        "display_name": "Arabic"
      },
      {
        "language": "el-GR",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/7037bb16-f5a7-48a3-acfb-87f68fac21ec.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_25ba53be-e104-4c2a-94b8-eef8a976d466.vtt",
        "display_name": "Greek"
      },
      {
        "language": "cs-CZ",
        "type": "normal",
        "subtitle": "https://video-v6.mydramawave.com/vt/20937/56b52d91-dca5-4ee5-bbc5-98ffb50acf39.srt",
        "vtt": "https://video-v6.mydramawave.com/ut/20937/1_b2d697f9-9348-479a-a011-171afabdae28.vtt",
        "display_name": "Czech"
      }
    ],
    "episodesCount": 30
  }
];

export const AUTHENTIC_FREEREELS_STREAMS: string[] = [
  "https://video-v6.mydramawave.com/vt/e7c5c2d9-52a9-4c92-95de-d5231d5fedba/h264-13ed5235-e4c3-4e2f-858f-bf59ff83e9e2.m3u8",
  "https://video-v6.mydramawave.com/vt/d918fb90-944c-4c51-a734-a17e108a0d87/h264-5415a678-26c6-4f50-970e-121042261f4a.m3u8",
  "https://video-v6.mydramawave.com/vt/ec536ce7-260a-41f0-bc8b-81520f63ed24/h264-baa0ba6f-0fe4-4924-9c2b-b2fedc480876.m3u8",
  "https://video-v6.mydramawave.com/vt/6c0bc978-9861-48d0-9860-109973a10fed/h264-dd0b37f1-79d5-4c8b-b64e-2f46070fe96c.m3u8",
  "https://video-v6.mydramawave.com/vt/70ce20e3-7c28-44c4-b9b8-7c33181e4a83/h264-d22b5a6a-104d-45ef-be15-df7192eb44db.m3u8",
  "https://video-v6.mydramawave.com/vt/bbb26781-32f5-419b-be77-cc5afd7b5739/h264-8aebb829-5381-4873-9c91-a15500bc1ab5.m3u8",
  "https://video-v6.mydramawave.com/vt/c1cc368d-4472-451e-854f-0f885663112d/h264-6eb6f8fb-d3f2-48e3-b433-23b84503609b.m3u8",
  "https://video-v6.mydramawave.com/vt/adc7fd80-8cde-4138-bb4c-4c8e67e1c801/h264-9381dd7a-66e9-49e7-a4b7-d093cb511ff9.m3u8",
  "https://video-v6.mydramawave.com/vt/b2c1534d-64e9-46c7-a578-4ac7171e2d56/h264-a1d0d8ec-dd31-443b-afff-40564850900b.m3u8",
  "https://video-v6.mydramawave.com/vt/a1d8fc7e-7ef0-4960-a071-21a3626f63ca/h264-a6646310-5cde-4b6f-b0fd-503cbfcc3a89.m3u8",
  "https://video-v6.mydramawave.com/vt/50864239-cafd-493f-a5de-4b0b8f805b0e/h264-86910941-19ed-40e4-9a7d-7b84abd76d23.m3u8",
  "https://video-v6.mydramawave.com/vt/8aa88117-670e-47fe-a17e-73342f8a943a/h264-30071301-7ca1-4bec-92f6-58d09d774997.m3u8",
  "https://video-v6.mydramawave.com/vt/4a3e812f-d7fe-4059-a1ca-b459649ffe6b/h264-6285b1c2-b818-4db0-8193-f3b70fd76f9f.m3u8",
  "https://video-v1.mydramawave.com/vt/88779131-959e-4cb3-b74f-7de5e2fa72b1/h264-4d166bf7-0150-49eb-a33c-a159eccd1a8e.m3u8",
  "https://video-v6.mydramawave.com/vt/24a389ef-e63c-45c2-a394-86d9801ec37e/h264-2c10c0c5-2bc8-4f0b-b5a5-1766aae9375b.m3u8",
  "https://video-v6.mydramawave.com/vt/5ee7e312-1b37-41d7-98ee-b77449a33985/h264-845c94b1-06c0-4a80-80a6-be981116f6fe.m3u8",
  "https://video-v6.mydramawave.com/vt/5aa96d6c-fd36-4bdc-903b-e8190a58230e/h264-6f4efd79-db2f-4910-9bd8-03fec492492d.m3u8",
  "https://video-v6.mydramawave.com/vt/1d9f805c-4c92-4e0a-a40d-b9c85e8c24bc/h264-932f36dd-ca3f-49f7-b647-cc7616cd52da.m3u8",
  "https://video-v6.mydramawave.com/vt/d95be2a3-7add-4b04-b2ba-fef0d305dd65/h264-67a5158d-3d50-4079-9d79-11f75c7b5886.m3u8",
  "https://video-v6.mydramawave.com/vt/94b4e11e-3498-48c9-ab6e-74b52bf92792/h264-cb5bc31d-b1b8-44f6-9095-e5860b5c6c90.m3u8",
  "https://video-v6.mydramawave.com/vt/17c91a87-dd12-4ca0-8fda-a9786e50ddd7/h264-2b8900a9-bec3-45e1-912c-d6ecb0d30d40.m3u8",
  "https://video-v6.mydramawave.com/vt/2963f991-5a30-4c9b-ba7b-f33d371e156f/h264-12920862-0e81-48fc-9171-e560711c9682.m3u8",
  "https://video-v6.mydramawave.com/vt/44b506d4-4252-4dca-8f23-68b799d019ca/h264-198bc4d2-de89-42ca-bf39-b154b7354601.m3u8",
  "https://video-v6.mydramawave.com/vt/23d724bc-1f8a-4c87-add7-5a8c76b97c66/h264-8e1169f4-4eb0-4571-8bef-1518c3220caf.m3u8",
  "https://video-v6.mydramawave.com/vt/52ce3ded-341f-436e-9b3b-84e5df3aeeb1/h264-ea8f3199-ff4d-40b9-93ca-8d4e56f0dd30.m3u8",
  "https://video-v6.mydramawave.com/vt/cd7208b1-9401-447a-926b-545d2037a77e/h264-b4b5cc1f-25c1-42c0-99cc-5ca847aea6bc.m3u8",
  "https://video-v6.mydramawave.com/vt/768caa94-2318-4214-9b78-9fa6918addef/h264-070dd785-b60e-4cc3-853a-a21a0dcf137c.m3u8",
  "https://video-v6.mydramawave.com/vt/63d5006a-a323-406b-ae6a-a88364c15cc5/h264-8d9a29e5-287c-4232-9ace-f7a6baba22ae.m3u8",
  "https://video-v1.mydramawave.com/vt/4e1fd55c-716a-45aa-84bc-cbf277905403/h264-86eefd43-ea00-413a-992f-58e544a35803.m3u8",
  "https://video-v6.mydramawave.com/vt/9c2528f5-c1cd-420e-a862-bb9142544717/h264-07a6ba81-81f0-43ea-bb39-eda33952d1f2.m3u8",
  "https://video-v6.mydramawave.com/vt/0049ba46-b683-4e3e-b029-508a2b0c9483/h264-fc9665c2-2fe5-4025-9980-374ea7f5f6fb.m3u8",
  "https://video-v6.mydramawave.com/vt/4bd37d10-42a1-4dda-80c4-e1dea81fd868/h264-2f4b2e02-2085-46ee-8f38-5bc250b42ccc.m3u8",
  "https://video-v6.mydramawave.com/vt/b9e103e0-dcc2-4867-bc7b-3a131e2c3c15/h264-02f498fe-027a-42c1-b310-d1071074b6af.m3u8",
  "https://video-v6.mydramawave.com/vt/c1f4aa58-8ebe-4f48-9e5f-62a32d3afa95/h264-738e7134-da4b-4e88-bcd5-1d4331087e98.m3u8",
  "https://video-v6.mydramawave.com/vt/afbd9a4c-b23d-4f5d-802d-8553d3cd585c/h264-d30eb2fe-2f48-4e78-979b-94631813a94d.m3u8",
  "https://video-v6.mydramawave.com/vt/4434d00e-3454-4079-890d-795b82d8b5a1/h264-5099ec1b-bf7b-4726-b61e-a039c208179b.m3u8",
  "https://video-v6.mydramawave.com/vt/7a869165-bc29-4819-8f7e-34425ab29b9a/h264-4f830e93-5fa4-4071-93f3-422c00b13bb7.m3u8",
  "https://video-v6.mydramawave.com/vt/6efde1b6-9b49-4810-83b2-3bd023946113/h264-33956d67-1fb3-485f-8d97-aa78ac145feb.m3u8",
  "https://video-v6.mydramawave.com/vt/bd730875-ab62-49b8-aa9e-bc08789d5817/h264-d1ebcab8-7752-481a-8257-307dc760e90d.m3u8",
  "https://video-v6.mydramawave.com/vt/7ccbaacc-888d-4eb5-9421-59db8f93ab15/h264-3184c09c-0fe7-4114-bbca-69441bd35c37.m3u8",
  "https://video-v6.mydramawave.com/vt/917241b3-4ce0-4101-888d-ded2ef78bbd5/h264-8a87127b-013d-4698-9629-b69f270705e4.m3u8",
  "https://video-v6.mydramawave.com/vt/011194c7-79b8-46c8-a9ed-20e5e42ee6d4/h264-2d34a7ad-3e09-42b0-afad-f1be8b7d4a20.m3u8",
  "https://video-v6.mydramawave.com/vt/4527efbc-6f9b-4208-88aa-41a844985d26/h264-43912500-69cd-4e61-ac0c-aef6ac412203.m3u8",
  "https://video-v6.mydramawave.com/vt/666323b6-219f-46b1-bb79-a81f7b503907/h264-bf905dee-606a-4c24-9d64-4660c716a97f.m3u8",
  "https://video-v6.mydramawave.com/vt/ac8996fb-0421-4abb-8b14-ad2a47b34fbc/h264-a0dbe00c-77dd-4e0c-8790-4b4b8a7b96d0.m3u8",
  "https://video-v6.mydramawave.com/vt/606021c0-7ee7-4154-ab84-79d281879e22/h264-16e70fbd-23fb-4f65-b460-6ab04da358e6.m3u8",
  "https://video-v6.mydramawave.com/vt/8564ced4-dd5c-4d1d-b82a-a20c13bd16be/h264-d0267fb6-2e7a-4762-b51e-b828c35ad068.m3u8",
  "https://video-v6.mydramawave.com/vt/5d01b9f7-ae49-4fb6-8f52-e5b9841e64c2/h264-b7aef494-0574-4fd6-b552-b9eff9eee069.m3u8",
  "https://video-v6.mydramawave.com/vt/8e858445-cd0c-4694-90b8-d440f838f548/h264-e0c45d83-bc48-490b-9d29-90a2ed7cd766.m3u8",
  "https://video-v1.mydramawave.com/vt/6ea699fa-ba76-448e-8bab-f7daadb57a33/h264-7b3b4c7d-6038-4b72-805a-b13ca3f0a449.m3u8",
  "https://video-v6.mydramawave.com/vt/3a9f0640-35a5-4f54-8d11-635a2f738406/h264-0bdc0cdd-83c7-4a20-a546-dfb8fdda096c.m3u8",
  "https://video-v6.mydramawave.com/vt/e971a1df-6f39-4c89-b4e9-c7b6b5b08c0d/h264-cd990418-60f4-419a-ae9f-d8d1357a17e4.m3u8",
  "https://video-v6.mydramawave.com/vt/31301023-468b-418e-9f56-320afbd1769d/h264-a9df3666-f484-4854-8ae3-8e22ada41068.m3u8",
  "https://video-v6.mydramawave.com/vt/9cf51f7c-efe9-43ca-95b2-552cd2d3acf9/h264-68aded95-a437-49d0-b9aa-3f3084212ee2.m3u8",
  "https://video-v6.mydramawave.com/vt/20803f03-b40f-4e2a-a19a-46af91341f58/h264-d5b7b95d-5e71-47bc-b50e-51a04bf99cad.m3u8"
];
