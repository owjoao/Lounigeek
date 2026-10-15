from PIL import Image, ImageFilter
import os

base_dir = r'f:\Nova pasta\site\lounigeek\assets\images'

images_to_enhance = [
    ('hero/hero-desktop.png', 1920, 680),
    ('hero/hero-character.png', 720, 540),
    ('categories/action-figures.png', 280, 240),
    ('categories/mangas.png', 280, 240),
    ('categories/roupas.png', 280, 240),
    ('categories/bones.png', 280, 240),
    ('categories/chaveiros.png', 280, 240),
    ('products/itachi-uchiha.png', 400, 420),
    ('products/manga-one-piece-box.png', 400, 420),
    ('products/tanjiro-kamado.png', 400, 420),
    ('products/goku-ultra-instinto.png', 400, 420),
    ('products/camiseta-akatsuki.png', 400, 420),
    ('banners/banner-japan-figure.png', 720, 420),
    ('banners/banner-japan-torii.png', 400, 320),
    ('banners/banner-mangas.png', 360, 340),
    ('banners/banner-vestuario.png', 360, 340),
    ('banners/banner-comunidade-gojo.png', 640, 500),
    ('banners/banner-instagram-nezuko.png', 400, 300),
    ('reviews/avatar-lucas.png', 160, 160),
    ('reviews/avatar-fernanda.png', 160, 160),
    ('reviews/avatar-rafael.png', 160, 160),
]

for rel_path, target_w, target_h in images_to_enhance:
    full_path = os.path.join(base_dir, rel_path.replace('/', os.sep))
    if os.path.exists(full_path):
        img = Image.open(full_path).convert('RGBA')
        # Upscale suave usando Lanczos
        upscaled = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        # Aplicar nitidez
        sharp = upscaled.filter(ImageFilter.UnsharpMask(radius=1.5, percent=120, threshold=3))
        sharp.save(full_path, 'PNG', optimize=True)
        print(f"Aprimorado: {rel_path} -> {target_w}x{target_h}")

print("\nTodas as imagens foram aprimoradas em alta definição com sucesso!")

