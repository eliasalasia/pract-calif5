 export const ImageText = ({order, imgMobile, imgDesktop, title, text}) => {
    return (
      <div className={`${order} relative pt-[398px] sm:{350px} tablet:pt-[150px] lg:pt-[250px] desktop:pt-[398px]`}>
         <picture className="absolute top-0 pt-[398px]">
            <source media="(max-width:639px)" srcSet={imgMobile}/>
            <source media="(min-width:640px)" srcSet={imgDesktop}/>
            <img src={imgMobile} alt="imagen servicio" />
        </picture>
        <h2 className="text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan">{title}</h2>
        <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px] tablet:text-sm lg:w-[300px] lg:mx-auto">{text}</p>
      </div>
    )
 }