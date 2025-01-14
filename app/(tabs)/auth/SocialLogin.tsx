import React, {useState} from 'react';
import {Facebook, Google} from '@/assets/svgs';
import ButtonComponent from '@/components/ButtonComponent';
import SectionComponent from '@/components/SectionComponent';
import SpaceComponent from '@/components/SpaceComponent';
import TextComponent from '@/components/TextComponent';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamilies';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
      />
      <SpaceComponent height={16} />
      
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
        textFont={fontFamilies.regular}
        //onPress={handleLoginWithGoogle}
        iconFlex="left"
        icon={<Google />}
      />
      
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Facebook"
        textFont={fontFamilies.regular}
        //onPress={handleLoginWithFacebook}
        iconFlex="left"
        icon={<Facebook />}
      />
    </SectionComponent>
  );
};

export default SocialLogin;
