import fetchUserInfo from '../api/fetchUserInfo';
import validateObject from '../utils/validateObject';

const standard = {
  user: {
    id: '241418783272443904',
    shortId: '0',
    uniqueId: 'dave.johnson',
    nickname: 'Dave Johnson',
    avatarLarger: 'https://path to a larger avatar image',
    avatarMedium: 'https://path to a medium avatar image',
    avatarThumb: 'https://path to an avatra thumb',
    signature: '???? Animator from Costa Rica\nGet my app Dollify!\n??',
    createTime: 1497901438,
    verified: true,
    secUid: 'SuPeRsEcUrEHaSh',
    ftc: false,
    relation: 0,
    openFavorite: false,
    bioLink: {
      link: 'dollifyapp.com',
      risk: 3,
    },
    commentSetting: 0,
    duetSetting: 0,
    stitchSetting: 0,
    privateAccount: false,
    secret: false,
    isADVirtual: false,
    roomId: '',
  },
  stats: {
    followerCount: 0,
    followingCount: 0,
    heart: 0,
    heartCount: 0,
    videoCount: 0,
    diggCount: 0,
  },
  itemList: [],
};

const getUserInfo = async () => {
  const response = await fetchUserInfo();
  return validateObject(standard, response.data);
};

export default getUserInfo;
