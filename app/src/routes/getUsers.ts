import User from '../db/entities/User';

/** ユーザー一覧検索ミドルウェア */
const getUsers = async (): Promise<User[]> => {
  return await User.find();
};

export default getUsers;
