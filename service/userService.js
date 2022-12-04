const { User } = require("../models");
const { Role } = require("../models");
const roles = require("../app/roles.js");

const avatarts = [
  "https://sitiweb.nl/wp-content/uploads/2018/02/avatar.png",
  "https://cdn1.iconfinder.com/data/icons/cow-and-milk/154/cow-avatar-label-skin-round-256.png",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-VtlxsCCqD-A%2FUblp3FVJB-I%2FAAAAAAAAD5w%2FcnbSfpeiQL4%2Fs1600%2FAvatar_Smiley.png&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.195636211.1676%2Fsticker%2C375x360-bg%2Cffffff.u3.png&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F1860%2FPNG%2F512%2Fman16_117994.png&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F8T65akk8c.png&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.agoramedia.com%2Fwte3.0%2Fgcms%2Fredesign%2Favatars%2F15.png%3Fwidth%3D50&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20140721060232%2Fangrybirds%2Fimages%2F2%2F2e%2FAB_Epic_Avatar_Image_1.png&f=1&nofb=1",
];

const usernames = [
  'curious bunny',
  'hornet',
  'butterfly',
  'beesy bee',
  'chocolate monster',
  'frustrated fruit',
  'chokopie'
]

class UserService {
  async registration(
    email,
    password,
    firstname,
    lastname,
    birthdate,
    bio = null,
  ) {
    const candidate = await User.findOne({ where: { email: email } });
    const user_role = await Role.findOne({ where: { title: roles.USER } });

    if (candidate) {
      return "user_exists";
    }

    const user = await User.create({
      username: usernames[Math.floor(Math.random() * usernames.length)],
      email: email,
      password: password,
      dateOfBirth: birthdate,
      firstName: firstname,
      lastName: lastname,
      bio: bio,
      avatar: avatarts[Math.floor(Math.random() * avatarts.length)],
      RoleId: user_role.id,
    });
    if (!!user) {
      return "user_created";
    } else {
      return "error";
    }
  }
}

module.exports = UserService;
