import { Users } from '@prisma/client';

interface SessionContainer {
  User: Users;
  Session: any;
}

export default SessionContainer;
