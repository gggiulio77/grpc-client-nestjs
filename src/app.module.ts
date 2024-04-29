import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HELLOWORLD_PACKAGE_NAME } from 'grpc-proto-typescript/nestjs';

@Module({
    imports: [
        ClientsModule.register({
            clients: [
                {
                    name: HELLOWORLD_PACKAGE_NAME,
                    transport: Transport.GRPC,
                    options: {
                        // TODO: replace this with env variable
                        url: 'grpc-server-rust:5000',
                        package: HELLOWORLD_PACKAGE_NAME,
                        protoPath:
                            './node_modules/grpc-proto-typescript/proto/helloworld.proto',
                    },
                },
            ],
        }),
    ],
    controllers: [],
    providers: [AppService],
})
export class AppModule {}
