import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).overrideProvider(AuthService).useValue({
      signup: jest.fn(dto => {

        return {
          id: Date.now(),
          ...dto
        }
      })
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it("should create a new user", () => {
    expect(service.signup({ email: "miguel@gmail.com", password: "54321", username: "Helado" })).toEqual({
      id: expect.any(Number),
      email: "miguel@gmail.com",
      password: "54321",
      username: "Helado"
    });
  });

});
