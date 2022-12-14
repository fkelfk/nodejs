import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository,
        private jwtServicee: JwtService
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.creatUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
        const { username, password} = authCredentialsDto;
        const user = await this.userRepository.findOne({username : username});

        if(user && (await bcrypt.compare(password, user.password))) {
            const payload = { username };
            const accessToken = await this.jwtServicee.sign(payload);

            return {accessToken};
        } else {
            throw new UnauthorizedException('login failed')
        }
    }
}
