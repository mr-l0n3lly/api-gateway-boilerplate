import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DEFAULT_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'default',
          protoPath: join(__dirname, '.proto', 'default.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
