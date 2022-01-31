import React from 'react';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Post from './Post';

configure({ adapter: new Adapter() });

let post = {
  id: '7006694664724122881',
  secretID: '7006694664724122881',
  text: 'Instagram: kikakim??',
  createTime: 1631373229,
  authorMeta: {
    id: '6785823001336415238',
    secUid:
      'MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4',
    name: 'kikakiim',
    nickName: 'Kika Kim',
    verified: false,
    signature:
      '@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com',
    avatar:
      'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637204400&x-signature=r2E95i2c51SR9chBkXI9zSHi7Oc%3D',
    following: 89,
    fans: 24100000,
    heart: 629300000,
    video: 829,
    digg: 6733,
  },
  musicMeta: {
    musicId: '6952235736812750850',
    musicName: 'C? Chill Th�i (DJ TuSo & LEA Remix)',
    musicAuthor: 'Chillies & Suni H? Linh & Rhymastic',
    musicOriginal: false,
    musicAlbum: 'C? Chill Th�i (DJ TuSo & LEA Remix)',
    playUrl:
      'https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/dec7f7cce681453daf20aed3e778ca86',
    coverThumb:
      'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f5e7758750504d5b830a12ebbb339047~c5_100x100.jpeg',
    coverMedium:
      'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f5e7758750504d5b830a12ebbb339047~c5_200x200.jpeg',
    coverLarge:
      'https://p77-va.tiktokcdn.com/img/tos-useast2a-v-2774/f5e7758750504d5b830a12ebbb339047~c5_720x720.jpeg',
    duration: 60,
  },
  covers: {
    default:
      'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e31a9812e60940d084d78b6318eb668f_1631373232?x-expires=1637139600&x-signature=rKn%2B9E9SL97jOKwJhqoYtW%2F5vnU%3D',
    origin:
      'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/dcedfb7991ab4281857f3da123b599a9_1631373231?x-expires=1637139600&x-signature=UdM0NbzZKBbyOaeIi5PWxhYDgtU%3D',
    dynamic:
      'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/6d5b110eb075424bba9cf241b0c418a6_1631373231?x-expires=1637139600&x-signature=GchIsT%2Bv3eQZ54Z6fpdbbANFBe4%3D',
  },
  webVideoUrl: 'https://www.tiktok.com/@kikakiim/video/7006694664724122881',
  videoUrl:
    'https://v39-eu.tiktokcdn.com/1e9aabf4c75ac8178ee08e84661e3126/6194c66e/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111170307480101901760455A15858E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=',
  videoUrlNoWaterMark: '',
  videoApiUrlNoWaterMark: '',
  videoMeta: { height: 960, width: 540, duration: 9 },
  diggCount: 4100000,
  shareCount: 9382,
  playCount: 31600000,
  commentCount: 20100,
  downloaded: false,
  mentions: [],
  hashtags: [],
  effectStickers: [{ id: '459476', name: 'Color Selector' }],
};

describe('post', () => {
  it('should render my component', () => {
    const wrapper = shallow(<Post post={post} />);

    expect(wrapper.find('Card').length).toBe(1);
  });
});
