import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
      scope: ['email', 'profile'],
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): void {
    const emails = profile.emails as { value: string }[];
    const email = emails?.[0]?.value ?? '';

    // Check first before doing anything else
    const ALLOWED_EMAILS = ['matheiuamiel@gmail.com'];
    if (!ALLOWED_EMAILS.includes(email)) {
      done(new UnauthorizedException('Access restricted'), false);
      return;
    }

    const name = profile.name as { givenName: string; familyName: string };
    const photos = profile.photos as { value: string }[];

    const user = {
      email,
      firstName: name?.givenName ?? '',
      lastName: name?.familyName ?? '',
      picture: photos?.[0]?.value ?? '',
      accessToken,
    };

    done(null, user);
  }
}
