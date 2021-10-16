import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

// TODO: Make correct types
interface DefaultService {
  findOne(data: { id: number }): Promise<{ id: number, name: string }>;
  findAll(): Promise<{ id: number, name: string }[]>;
  create({ name: string }): Promise<{ id: number, name: string }>;
}

@Injectable()
export class AppService {
  defaultService: DefaultService;
  
  constructor(
    @Inject('DEFAULT_SERVICE') private defaultClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.defaultService = this.defaultClient.getService<DefaultService>('DefaultService');
  }

  getOneDefault(data: { id: number }): any {
    console.log(this.defaultService);
    return this.defaultService.findOne(data);
  }

  getAllDefault(): Promise<{ id: number, name: string }[]> {
    return this.defaultService.findAll();
  }

  createDefault(data: { name: string }): Promise<{ id: number, name: string}> {
    return this.defaultService.create(data);
  }
}
