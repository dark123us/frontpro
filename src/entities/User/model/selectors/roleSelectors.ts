import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../types/user';

const getUserRules = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRules, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRules, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
