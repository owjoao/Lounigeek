# -*- coding: utf-8 -*-
import os
import math
from PIL import Image, ImageDraw, ImageFilter

BASE_DIR = r"f:\Nova pasta\site\lounigeek\assets"
IMG_SRC_DIR = r"f:\Nova pasta\site\lounigeek\assets\images"
BRAIN_DIR = r"C:\Users\jvna1\.gemini\antigravity\brain\b28a8cf9-f9da-40fd-96f7-f4464143af22"

# Cores Mandatórias
HEX_LAVENDER = (201, 166, 229)    # #C9A6E5
HEX_DARK_BLUE = (35, 33, 95)      # #23215F
HEX_MAGENTA = (167, 49, 120)      # #A73178
HEX_SOFT_WHITE = (250, 248, 252)  # #FAF8FC

def color_overlay(img, tint_color, strength=0.12):
    tint = Image.new("RGBA", img.size, tint_color + (int(255 * strength),))
    return Image.alpha_composite(img.convert("RGBA"), tint)

def add_dark_text_gradient(img, left_percent=0.42):
    w, h = img.size
    grad = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(grad)
    cutoff = int(w * left_percent)
    fade_len = int(w * 0.18)
    
    for x in range(w):
        if x < cutoff:
            alpha = 220
        elif x < cutoff + fade_len:
            factor = 1.0 - (x - cutoff) / fade_len
            alpha = int(220 * factor)
        else:
            alpha = 0
        draw.line([(x, 0), (x, h)], fill=(24, 22, 67, alpha))
        
    return Image.alpha_composite(img.convert("RGBA"), grad)

# 1. IMAGEM 18: TEXTURA DE MANGÁ
def generate_texture_manga():
    size = (800, 800)
    img = Image.new("RGBA", size, HEX_SOFT_WHITE + (255,))
    draw = ImageDraw.Draw(img)
    
    spacing = 16
    dot_radius = 2.2
    dot_color = (201, 166, 229, 45)
    
    for y in range(0, size[1], spacing):
        offset = (spacing // 2) if (y // spacing) % 2 == 1 else 0
        for x in range(0, size[0], spacing):
            cx = x + offset
            cy = y
            draw.ellipse([cx - dot_radius, cy - dot_radius, cx + dot_radius, cy + dot_radius], fill=dot_color)
            
    line_color = (167, 49, 120, 18)
    for i in range(-size[0], size[0] * 2, 40):
        draw.line([(i, 0), (i + size[1] * 0.6, size[1])], fill=line_color, width=1)
        
    out_path = os.path.join(BASE_DIR, "decor", "texture-manga.webp")
    img.convert("RGB").save(out_path, format="WEBP", quality=92)
    print(f"[18/20] Textura de Mangá salva: {out_path}")

# 2. IMAGEM 19: ELEMENTOS DECORATIVOS SAKURA
def generate_decor_sakura():
    size = (1200, 1200)
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    def draw_petal(cx, cy, radius, angle, color):
        rad = math.radians(angle)
        p1 = (cx, cy)
        tip_x = cx + radius * math.cos(rad)
        tip_y = cy + radius * math.sin(rad)
        ctrl1_x = cx + (radius * 0.7) * math.cos(rad - 0.45)
        ctrl1_y = cy + (radius * 0.7) * math.sin(rad - 0.45)
        ctrl2_x = cx + (radius * 0.7) * math.cos(rad + 0.45)
        ctrl2_y = cy + (radius * 0.7) * math.sin(rad + 0.45)
        draw.polygon([p1, (ctrl1_x, ctrl1_y), (tip_x, tip_y), (ctrl2_x, ctrl2_y)], fill=color)

    def draw_flower(cx, cy, r, base_angle, petal_color, center_color):
        for i in range(5):
            draw_petal(cx, cy, r, base_angle + i * 72, petal_color)
        draw.ellipse([cx - r * 0.22, cy - r * 0.22, cx + r * 0.22, cy + r * 0.22], fill=center_color)

    color_petal_pink = (235, 140, 195, 230)
    color_petal_lavender = (201, 166, 229, 230)
    color_center = (167, 49, 120, 255)
    
    draw_flower(250, 250, 130, 15, color_petal_pink, color_center)
    draw_flower(850, 280, 110, 45, color_petal_lavender, color_center)
    draw_flower(300, 850, 95, 80, color_petal_lavender, color_center)
    draw_flower(900, 880, 140, 30, color_petal_pink, color_center)
    draw_flower(580, 560, 160, 0, color_petal_pink, color_center)
    
    petals_data = [
        (150, 520, 75, 40, color_petal_pink),
        (460, 180, 85, -25, color_petal_lavender),
        (720, 420, 65, 110, color_petal_pink),
        (1050, 540, 80, 65, color_petal_lavender),
        (480, 920, 70, -60, color_petal_pink),
        (760, 740, 90, 135, color_petal_pink),
        (180, 1020, 85, 20, color_petal_lavender),
        (1020, 180, 60, -90, color_petal_pink),
    ]
    for px, py, pr, pa, pc in petals_data:
        draw_petal(px, py, pr, pa, pc)
        
    out_path = os.path.join(BASE_DIR, "decor", "decor-sakura.png")
    img.save(out_path, format="PNG")
    print(f"[19/20] Elementos Decorativos Sakura salvos: {out_path}")

# 3. IMAGEM 20: CONCEITO DO SÍMBOLO LOUNIGEEK
def generate_symbol_concept():
    size = (1000, 1000)
    img = Image.new("RGBA", size, (24, 22, 67, 255))
    draw = ImageDraw.Draw(img)
    
    glow = Image.new("RGBA", size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([250, 250, 750, 750], fill=(201, 166, 229, 35))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)
    
    draw.polygon([(320, 700), (480, 300), (620, 440), (480, 700)], fill=HEX_LAVENDER + (255,))
    draw.polygon([(480, 300), (740, 380), (640, 560), (480, 480)], fill=HEX_MAGENTA + (255,))
    draw.polygon([(480, 480), (640, 560), (540, 720), (420, 700)], fill=HEX_DARK_BLUE + (255,))
    draw.polygon([(640, 440), (760, 500), (680, 720), (540, 700)], fill=(235, 140, 195, 230))
    
    out_path = os.path.join(BASE_DIR, "decor", "lounigeek-symbol-concept.png")
    img.save(out_path, format="PNG")
    print(f"[20/20] Conceito do Símbolo Lounigeek salvo: {out_path}")

# 4. TODAS AS FOTOGRAFIAS E BANNERS (WebP)
def generate_photo_assets():
    # Hero Desktop & Mobile
    hero_src = os.path.join(BRAIN_DIR, "hero_desktop_1791748352718.jpg")
    if os.path.exists(hero_src):
        im = Image.open(hero_src).resize((1920, 1080), Image.Resampling.LANCZOS)
        im = add_dark_text_gradient(im, 0.42)
        out = os.path.join(BASE_DIR, "hero", "hero-desktop.webp")
        im.convert("RGB").save(out, format="WEBP", quality=92)
        print(f"[01/20] Hero Desktop salvo: {out}")
        
        im_mob = Image.open(hero_src)
        w, h = im_mob.size
        target_w = int(h * 4 / 5)
        crop_box = ((w - target_w) // 2, 0, (w + target_w) // 2, h)
        im_mob = im_mob.crop(crop_box).resize((1080, 1350), Image.Resampling.LANCZOS)
        grad_mob = Image.new("RGBA", (1080, 1350), (0, 0, 0, 0))
        gm_draw = ImageDraw.Draw(grad_mob)
        for y in range(600):
            a = int(220 * (1.0 - y / 600))
            gm_draw.line([(0, y), (1080, y)], fill=(24, 22, 67, a))
        im_mob = Image.alpha_composite(im_mob.convert("RGBA"), grad_mob)
        out_mob = os.path.join(BASE_DIR, "hero", "hero-mobile.webp")
        im_mob.convert("RGB").save(out_mob, format="WEBP", quality=92)
        print(f"[02/20] Hero Mobile salvo: {out_mob}")

    # Categorias (4:3 - 1200x900)
    cats = [
        ("categories/categoria-action-figures.webp", "categories/action-figures.png"),
        ("categories/categoria-mangas.webp", "categories/mangas.png"),
        ("categories/categoria-camisetas.webp", "categories/roupas.png"),
        ("categories/categoria-bones.webp", "categories/bones.png"),
        ("categories/categoria-chaveiros.webp", "categories/chaveiros.png"),
        ("categories/categoria-outros-geek.webp", "categories/chaveiros.png"),
    ]
    idx = 3
    for rel_out, rel_src in cats:
        src = os.path.join(IMG_SRC_DIR, rel_src.replace('/', os.sep))
        out = os.path.join(BASE_DIR, rel_out.replace('/', os.sep))
        if os.path.exists(src):
            im = Image.open(src).convert("RGBA").resize((1200, 900), Image.Resampling.LANCZOS)
            im = color_overlay(im, HEX_LAVENDER, strength=0.08)
            im.convert("RGB").save(out, format="WEBP", quality=92)
            print(f"[{idx:02d}/20] Categoria salva: {out}")
        idx += 1

    # Banners Editoriais (16:9 - 1920x1080)
    banners = [
        ("banners/banner-action-figures.webp", "banners/banner-japan-figure.png", 0.35),
        ("banners/banner-mangas.webp", os.path.join(BRAIN_DIR, "banner_mangas_1791748382863.jpg"), 0.30),
        ("banners/banner-acessorios.webp", "banners/banner-vestuario.png", 0.32),
        ("banners/banner-comunidade.webp", os.path.join(BRAIN_DIR, "banner_comunidade_gojo_1791748354301.jpg"), 0.45),
        ("banners/banner-instagram.webp", "banners/banner-instagram-nezuko.png", 0.25)
    ]
    idx = 9
    for rel_out, src_file, left_grad in banners:
        src = src_file if os.path.isabs(src_file) else os.path.join(IMG_SRC_DIR, src_file.replace('/', os.sep))
        out = os.path.join(BASE_DIR, rel_out.replace('/', os.sep))
        if os.path.exists(src):
            im = Image.open(src).convert("RGBA").resize((1920, 1080), Image.Resampling.LANCZOS)
            im = color_overlay(im, HEX_MAGENTA, strength=0.06)
            im = add_dark_text_gradient(im, left_percent=left_grad)
            im.convert("RGB").save(out, format="WEBP", quality=92)
            print(f"[{idx:02d}/20] Banner salvo: {out}")
        idx += 1

    # Produtos Demonstrativos (1:1 - 1000x1000)
    prods = [
        ("products/produto-figure-demo-01.webp", "products/itachi-uchiha.png"),
        ("products/produto-manga-demo-01.webp", "products/manga-one-piece-box.png"),
        ("products/produto-camiseta-demo-01.webp", "products/camiseta-akatsuki.png"),
        ("products/produto-acessorio-demo-01.webp", "products/tanjiro-kamado.png"),
    ]
    idx = 14
    for rel_out, rel_src in prods:
        src = os.path.join(IMG_SRC_DIR, rel_src.replace('/', os.sep))
        out = os.path.join(BASE_DIR, rel_out.replace('/', os.sep))
        if os.path.exists(src):
            im = Image.open(src).convert("RGBA")
            bg = Image.new("RGBA", (1000, 1000), (250, 248, 252, 255))
            im_resized = im.resize((820, 820), Image.Resampling.LANCZOS)
            bg.paste(im_resized, (90, 90), im_resized)
            bg.convert("RGB").save(out, format="WEBP", quality=92)
            print(f"[{idx:02d}/20] Produto Demo salvo: {out}")
        idx += 1

if __name__ == '__main__':
    print("Iniciando geração completa das 20 imagens...")
    generate_photo_assets()
    generate_texture_manga()
    generate_decor_sakura()
    generate_symbol_concept()
    print("\nTODAS AS 20 IMAGENS FORAM GERADAS E SALVAS COM SUCESSO!")

