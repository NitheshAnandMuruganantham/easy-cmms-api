import { SessionContainer as SupertokensSession } from 'supertokens-node/recipe/session';
import { Users } from '@prisma/client';

interface SessionContainer {
  User: Users;
  Session: SupertokensSession;
}

export default SessionContainer;
