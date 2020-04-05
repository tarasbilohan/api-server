import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    globalPrefix: process.env.GLOBAL_PREFIX || 'api',
  };
});
