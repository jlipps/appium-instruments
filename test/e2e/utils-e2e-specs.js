import { utils } from '../..';
import chai from 'chai';

chai.should();

describe('utils', function () {
  this.timeout(90000);

  describe('quickLaunch', () => {
    it.skip('should terminate', async () => {
      await utils.quickLaunch("iPhone 6 (8.3 Simulator)");
    });
  });
});
