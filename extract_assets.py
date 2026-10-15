from PIL import Image
import os

mockup_path = r'f:\Nova pasta\site\lounigeek\assets\reference\mockup.png'
base_dir = r'f:\Nova pasta\site\lounigeek\assets\images'

img = Image.open(mockup_path).convert('RGBA')
w, h = img.size
print(f"Dimensões do mockup: {w}x{h}")

# A imagem mockup tem 470x1024
# Vamos calcular as proporções verticais:
# 1. Hero banner: de y=18 até y=205 (cobre o fundo da pagoda e o guerreiro anime)
# 2. Categoria 1 (Goku action figure): y=238 a y=286, x=32 a x=98
# 3. Categoria 2 (Manga box): y=238 a y=286, x=113 a x=176
# 4. Categoria 3 (Camiseta): y=238 a y=286, x=191 a x=254
# 5. Categoria 4 (Bone): y=238 a y=286, x=270 a x=332
# 6. Categoria 5 (Chaveiro): y=238 a y=286, x=348 a x=411
# 7. Produto 1 (Itachi): y=362 a y=428, x=44 a x=100
# 8. Produto 2 (One Piece Box): y=362 a y=428, x=124 a x=184
# 9. Produto 3 (Tanjiro): y=362 a y=428, x=206 a x=262
# 10. Produto 4 (Goku Ultra Instinto): y=362 a y=428, x=286 a x=344
# 11. Produto 5 (Camiseta Akatsuki): y=362 a y=428, x=368 a x=426
# 12. Banner Japão (Luffy + Coleção): y=490 a y=586, x=0 a x=200
# 13. Banner Japão (Torii + Sol): y=500 a y=586, x=340 a x=465
# 14. Bloco Mangás Foto: y=600 a y=684, x=20 a x=106
# 15. Bloco Vestuario Foto: y=600 a y=684, x=250 a x=335
# 16. Banner Comunidade (Gojo Satoru): y=696 a y=790, x=250 a x=395
# 17. Avatares Depoimentos:
#     - Lucas: y=835 a y=865, x=48 a x=72
#     - Fernanda: y=835 a y=865, x=182 a x=206
#     - Rafael: y=835 a y=865, x=316 a x=340
# 18. Banner Instagram (Nezuko + Sakura): y=896 a y=936, x=0 a x=470

cuts = {
    'hero/hero-desktop.png': (0, 30, 470, 206),
    'hero/hero-character.png': (240, 32, 470, 206),
    'categories/action-figures.png': (32, 238, 98, 288),
    'categories/mangas.png': (112, 238, 178, 288),
    'categories/roupas.png': (190, 238, 256, 288),
    'categories/bones.png': (268, 238, 334, 288),
    'categories/chaveiros.png': (346, 238, 412, 288),
    'products/itachi-uchiha.png': (40, 360, 104, 430),
    'products/manga-one-piece-box.png': (120, 360, 186, 430),
    'products/tanjiro-kamado.png': (202, 360, 268, 430),
    'products/goku-ultra-instinto.png': (282, 360, 348, 430),
    'products/camiseta-akatsuki.png': (364, 360, 430, 430),
    'banners/banner-japan-figure.png': (0, 492, 190, 584),
    'banners/banner-japan-torii.png': (340, 500, 465, 584),
    'banners/banner-mangas.png': (20, 600, 110, 686),
    'banners/banner-vestuario.png': (246, 600, 338, 686),
    'banners/banner-comunidade-gojo.png': (240, 696, 400, 790),
    'banners/banner-instagram-nezuko.png': (0, 896, 470, 936),
    'reviews/avatar-lucas.png': (48, 836, 74, 866),
    'reviews/avatar-fernanda.png': (182, 836, 208, 866),
    'reviews/avatar-rafael.png': (316, 836, 342, 866),
}

for rel_path, box in cuts.items():
    out_file = os.path.join(base_dir, rel_path.replace('/', os.sep))
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    cropped = img.crop(box)
    cropped.save(out_file, 'PNG')
    print(f"Salvo: {rel_path} ({cropped.size[0]}x{cropped.size[1]})")

print("\nTodos os recortes de alta precisão do mockup foram extraídos e organizados com sucesso!")

