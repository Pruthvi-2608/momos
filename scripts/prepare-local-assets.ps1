Add-Type -AssemblyName System.Drawing
$sourceDir = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../../Momos and stuff/public/assets'))
$targetDir = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../public/assets/instagram'))
New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
$names = @('food/post_11_DQPayD4jMSw_main.jpg','food/post_6_carousel_1.jpg','food/post_17_DYw8PC5M2be_main.jpg','food/post_2_carousel_2.jpg','food/post_8_DeCDnbTCxvw_main.jpg','food/post_0_carousel_1.jpg','food/post_9_Debz-5WocUG_main.jpg','gallery/post_19_DdQTo9DtGsI_main.jpg','gallery/post_5_DdRDMJrhfH4_main.jpg','food/post_0_carousel_3.jpg')
$ids = @('momos','korean','matcha','table','cafe','friends','date','storefront','opening','together')
$records = @()
for($i=0;$i -lt $names.Count;$i++) {
  $sourcePath=Join-Path $sourceDir $names[$i]
  $photo=[System.Drawing.Image]::FromFile($sourcePath)
  foreach($width in @(480,960,1600)) {
    $w=[Math]::Min($width,$photo.Width)
    $h=[int]([double]$photo.Height*$w/$photo.Width)
    $bitmap=New-Object System.Drawing.Bitmap($w,$h)
    $graphics=[System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode=[System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($photo,0,0,$w,$h)
    $bitmap.Save((Join-Path $targetDir "$($ids[$i])-$width.jpg"),[System.Drawing.Imaging.ImageFormat]::Jpeg)
    $graphics.Dispose(); $bitmap.Dispose()
  }
  $records+=@{id=$ids[$i];source=$names[$i];width=$photo.Width;height=$photo.Height;sha256=(Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash}
  $photo.Dispose()
}
$records | ConvertTo-Json | Set-Content -Encoding UTF8 (Join-Path $targetDir 'provenance.json')
Write-Output "Prepared $($names.Count) local photographs in three responsive sizes."
