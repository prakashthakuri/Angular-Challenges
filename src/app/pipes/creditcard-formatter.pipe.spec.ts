import { CreditcardFormatterPipe } from './creditcard-formatter.pipe';

describe('CreditcardFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditcardFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
