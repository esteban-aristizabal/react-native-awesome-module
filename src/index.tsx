import SiftReactNative from 'sift-react-native';
import { Kushki } from '@kushki/js';

type KushkiReactNativeType = {
  requestToken: () => void;
};

const configureSwift = () => {
  SiftReactNative.setSiftConfig(
    '592dfdf5e4b0a2f15e763c5f',
    '57bad4e66d',
    true,
    'https://api3.siftscience.com/v3/accounts/%@/mobile_events',
    false
  );
  SiftReactNative.setUserId('200000001062125400004242424242');
};

const requestToken = (): void => {
  console.log(123312);
  configureSwift();

  const tokenMerchantId = '20000000102033494000';

  const kushkiJS: Kushki = new Kushki({
    merchantId: tokenMerchantId,
    inTestEnvironment: true,
  });

  kushkiJS.requestToken(
    {
      card: {
        number: '424242424242',
        name: 'Test Esteban',
        expiryYear: '21',
        expiryMonth: '12',
        cvc: '123',
      },
      amount: 100,
      currency: 'USD',
    },
    (response) => {
      console.log('kushki js response', response);
    }
  );
};

const KushkiReactNative: KushkiReactNativeType = {
  requestToken,
};

export default KushkiReactNative as KushkiReactNativeType;
