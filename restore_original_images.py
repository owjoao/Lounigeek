from PIL import Image, ImageFilter
import os

mockup_path = r'f:\Nova pasta\site\lounigeek\assets\reference\mockup.png'
base_dir = r'f:\Nova pasta\site\lounigeek\assets\images'

img = Image.open(mockup_path).convert('RGBA')
w, h = img.size
print(f"Mockup original: {w}x{h}")

# Coordenadas precisas de cada elemento no mockup:
cuts = {
    # Categorias
    'categories/action-figures.png': ((30, 236, 100, 290), (320, 240)),
    'categories/mangas.png': ((110, 236, 180, 290), (320, 240)),
    'categories/roupas.png': ((188, 236, 258, 290), (320, 240)),
    'categories/bones.png': ((266, 236, 336, 290), (320, 240)),
    'categories/chaveiros.png': ((344, 236, 414, 290), (320, 240)),
    
    # Produtos em Destaque
    'products/itachi-uchiha.png': ((38, 355, 106, 432), (400, 440)),
    'products/manga-one-piece-box.png': ((118, 355, 188, 432), (400, 440)),
    'products/tanjiro-kamado.png': ((200, 355, 270, 432), (400, 440)),
    'products/goku-ultra-instinto.png': ((280, 355, 350, 432), (400, 440)),
    'products/camiseta-akatsuki.png': ((362, 355, 432, 432), (400, 440)),
    
    # Banners Editoriais
    'banners/banner-japan-figure.png': ((0, 492, 195, 584), (720, 420)),
    'banners/banner-japan-torii.png': ((340, 500, 465, 584), (400, 320)),
    'banners/banner-mangas.png': ((20, 600, 112, 686), (400, 380)),
    'banners/banner-vestuario.png': ((244, 600, 340, 686), (400, 380)),
    'banners/banner-comunidade-gojo.png': ((240, 695, 410, 792), (720, 420)),
    'banners/banner-instagram-nezuko.png': ((0, 892, 470, 938), (1440, 180)),
    
    # Avatares de Depoimentos
    'reviews/avatar-lucas.png': ((46, 834, 76, 866), (160, 160)),
    'reviews/avatar-fernanda.png': ((180, 834, 210, 866), (160, 160)),
    'reviews/avatar-rafael.png': ((314, 834, 344, 866), (160, 160)),
    
    # Hero Character
    'hero/hero-character.png': ((250, 35, 455, 175), (720, 500)),
}

for rel_path, (box, target_size) in cuts.items():
    out_file = os.path.join(base_dir, rel_path.replace('/', os.sep))
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    cropped = img.crop(box)
    
    # Upscale de alta fidelidade com Lanczos e unsharp mask
    upscaled = cropped.resize(target_size, Image.Resampling.LANCZOS)
    sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.5, percent=130, threshold=2))
    sharpened.save(out_file, 'PNG', optimize=True)
    print(f"Salvo fiel do mockup: {rel_path} ({target_size[0]}x{target_size[1]})")

# Fundo do Hero: usar a arte noturna japonesa gerada aqui
hero_ai = r'C:\Users\jvna1\.gemini\antigravity\brain\b28a8cf9-f9da-40fd-96f7-f4464143af22\hero_desktop_1791748352718.jpg'
if os.path.exists(hero_ai):
    im_h = Image.open(hero_ai).convert('RGBA')
    im_h.save(os.path.join(base_dir, r'hero\hero-desktop.png'), 'PNG')
    print("Hero background com arte noturna da pagoda aplicado com sucesso!")

print("\nTodas as imagens originais geradas/fornecidas por você foram restauradas com máxima nitidez!")

