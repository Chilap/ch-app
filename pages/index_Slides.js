export default function Presentation() {
    return(
        <div className="presentation">
            <h3><em>"Today's Title"</em> Slides</h3>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR8neJVMHjwZwyDbMGGAd_u5j6IY9VkRRbVgfA8FxQ09b1plvjMDJLHA6EFaSS09MVl234idSS4QTkw/embed?start=false&loop=false&delayms=3000" 
                className = "presentationSlides hidden lg:inline-block"
                frameborder="0" 
                width="960" height="569" 
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"
            />
            
            {/* tablet */}
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR8neJVMHjwZwyDbMGGAd_u5j6IY9VkRRbVgfA8FxQ09b1plvjMDJLHA6EFaSS09MVl234idSS4QTkw/embed?start=false&loop=false&delayms=3000" 
                className = "presentationSlides hidden md:inline-block lg:hidden"
                frameborder="0" 
                width="700" height="440" 
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"
            />

            {/* phone */}
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR8neJVMHjwZwyDbMGGAd_u5j6IY9VkRRbVgfA8FxQ09b1plvjMDJLHA6EFaSS09MVl234idSS4QTkw/embed?start=false&loop=false&delayms=3000" 
                className = "presentationSlides inline-block md:hidden"
                frameborder="0" 
                width="380" height="250" 
                allowfullscreen="true" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"
            />
        </div>
    )
}