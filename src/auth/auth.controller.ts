import { Body, Controller, Post, Query, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IS_PUBLIC_KEY } from './public.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @SetMetadata(IS_PUBLIC_KEY, true)
  @Post('login')
  login(
    @Body('org_id') org_id: number,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(org_id, email, password);
  }
}
