import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
    HELLOWORLD_PACKAGE_NAME,
    GreeterClient,
    GREETER_SERVICE_NAME,
    HelloRequest,
} from 'grpc-proto-typescript/nestjs';

@Injectable()
export class AppService implements OnModuleInit {
    private helloworldService: GreeterClient;

    constructor(@Inject(HELLOWORLD_PACKAGE_NAME) private client: ClientGrpc) {}

    onModuleInit() {
        this.helloworldService =
            this.client.getService<GreeterClient>(GREETER_SERVICE_NAME);
    }

    async sayHello() {
        const request: HelloRequest = { name: 'Coco' };

        console.log('Sending request');

        return this.helloworldService.sayHello(request);
    }
}
