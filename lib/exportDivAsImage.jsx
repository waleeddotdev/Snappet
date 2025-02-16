import html2canvas from 'html2canvas';

export const exportDivAsImage = async (scale = 1, format = 'png', filename = 'exported-image') => {
    const targetDiv = document.getElementById('myDiv');

    try {
        const originalBackground = targetDiv.style.backgroundColor;
        const originalBackgroundImage = targetDiv.style.backgroundImage;

        alert(originalBackgroundImage)

        const shouldBeTransparent = !originalBackground || originalBackground.trim() === "none" || originalBackground.trim() === "";

        // Temporarily remove the background if needed
        if (shouldBeTransparent && !originalBackgroundImage) {
            targetDiv.style.background = "none";
        }

        const canvas = await html2canvas(targetDiv, {
            scale: scale,
            useCORS: true,
            backgroundColor: shouldBeTransparent ? null : originalBackground,
            logging: false,
        });

        const imageDataUrl = canvas.toDataURL(`image/${format}`, 1);

        const link = document.createElement('a');
        link.href = imageDataUrl;
        link.download = `${filename}.${format}`;
        link.click();

        console.log(`Image saved as ${filename}.${format}`);
    } catch (error) {
        console.error('Error exporting the div as an image:', error);
    }
};
