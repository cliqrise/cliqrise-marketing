from PIL import Image
import os

def process_logo():
    # Input path (the selected metallic logo)
    input_path = "/home/ubuntu/cliqrise-website/client/public/images/logo-var-ref-4-metallic.png"
    output_dir = "/home/ubuntu/cliqrise-website/client/public/images"
    
    # Open image
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # Simple background removal (assuming black background based on generation)
    # Since the generation prompt used black background, we'll make black pixels transparent
    # A better approach for complex images is using a threshold, but for generated images on black, this often works well
    # However, for high quality, we might want to be careful. 
    # Let's use a threshold.
    
    newData = []
    for item in datas:
        # Check if pixel is close to black
        if item[0] < 15 and item[1] < 15 and item[2] < 15:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Crop to content (trim transparent borders)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    
    # Save original transparent version
    base_name = "cliqrise-logo-metallic"
    img.save(f"{output_dir}/{base_name}-original.png", "PNG")
    
    # Create sizes
    sizes = {
        "large": 1024,
        "medium": 512,
        "small": 256
    }
    
    for size_name, width in sizes.items():
        # Calculate height maintaining aspect ratio
        w_percent = (width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        
        resized_img = img.resize((width, h_size), Image.Resampling.LANCZOS)
        resized_img.save(f"{output_dir}/{base_name}-{size_name}.png", "PNG")
        print(f"Saved {size_name} logo: {width}x{h_size}")

if __name__ == "__main__":
    process_logo()
