import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Logo from '/assets/logo.png';
import style from './style/Footer.module.scss';

function Footer() {
  return (
    <div className={style.mainFooter}>
      <div className={style.footerBlock}>
        <div className={style.logoFooter}>
          <p className={style.footerSinga}>singa </p>
          <img className={style.footerLogo} src={Logo} alt="Singa Logo" />
        </div>
        <div className={style.footerMenuBlock}>
          <p className={style.footerMenuText}>Bonjour@Singa.com</p>
          <p className={style.footerMenuText}>75 rue Saint-Martin</p>
          <p className={style.footerMenuText}>75008 PARIS</p>
        </div>
      </div>

      <div className={style.footerBlock}>
        <div className={style.footerRessources}>Ressources</div>
        <div className={style.footerMenu}>
          <p className={style.footerMenuText}>Blog</p>
          <p className={style.footerMenuText}>FAQ</p>
          <p className={style.footerMenuText}>Présence internationale</p>
          <p className={style.footerMenuText}>Dictionnnaire assurance</p>
        </div>
      </div>

      <div className={style.footerBlock}>
        <div className={style.footerRessources}>Entreprise</div>
        <div className={style.footerMenu}>
          <p className={style.footerMenuText}>On recrute</p>
          <p className={style.footerMenuText}>Mentions légales</p>
          <p className={style.footerMenuText}>Présence internationale</p>
          <p className={style.footerMenuText}>Dictionnnaire assurance</p>
        </div>
      </div>

      <div className={style.footerInfos}>
        <div className={style.footerSuivezSinga}>Suivez Singa</div>
        <div className={style.footerIconContainer}>
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
}
export default Footer;
