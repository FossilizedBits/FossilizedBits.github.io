<!-- ---
layout: post
title: "Welcome to minima-reboot"
--- -->

---
layout: post
title: "Rethinking my Homelab"
---

# Rethinking my Homelab

A couple of years ago I purchased a [QNAP TS-251B-2G](https://www.qnap.com/en-me/product/ts-251b/specs/hardware) on a whim, and replaced the single ram stick with 2x4GB sticks. I knew it would be limited, as it had an Intel Celeron J3355 dual-core 2.0GHz processor, but my plan was for it to be just a simple network drive... if you're reading this, then you already know I out grew it. The machine had two drive slots, and could be augmented with other things, but the Celeron and ram would always be limiters.

I started messing with different things like self-hosted services, containers, and having it serve as my time machine backup. This placed a burden on the system that slowed down some of its primary responsibilities too much, so I added a Raspberry Pi 3B+ to host the Docker containers... and later upped it to a Raspberry Pi 4B. I tried a couple of services that simply taxed the 4GB Pi too much, so I tried an 8GB model, and it seemed to hold well for the time being. As I got more and more into development and hosting, the need grew for more space, more power, and a better processor.

## AMD EPYC 7282 Build

I settled on the [AMD EPYC™ 7282](https://www.amd.com/en/product/8836), after evaluating the 3950X and the 5950X, since I found Intel cost prohibitive for equivalent systems. I built out some systems on PC Builder, but always came back to needing a few more lanes. Fortunately, the cost difference in negligible for a 3950x/5950x and the 7282, and a threadripper would have doubled the cost and TDP. A Ryzen Threadripper would have given me plenty of lanes, 60 instead of 24 to be exact, but would have required a more expensive system so the EPYC route seemed best. ServeTheHome reviewed the CPU, and stated 
> [The AMD EPYC 7282 is a processor filled with mystique in some circles. It weighs in with a scant 120W TDP yet it has full PCIe Gen4 I/O, memory capacity, and sixteen cores. If you were looking for a lower-power AMD EPYC 7002 series CPU, this is it.](https://www.servethehome.com/amd-epyc-7282-benchmarks-and-review/) 

at the beginning of their article, which is literally what I wanted for my build.  
<br>
### Processors - EPYC
<center><table><tr><th><center>

[AMD EPYC 7282](https://www.amd.com/en/products/cpu/amd-epyc-7282)<br>

</center><th>1</th></th></tr><tr><td>

![<center>Source:</center>](https://webobjects2.cdw.com/is/image/CDW/6177000?wid=784&hei=477&resMode=bilin&fit=fit,1 "Test...")

<!-- Adding images in Markdown
https://www.digitalocean.com/community/tutorials/markdown-markdown-images
![Alt text](https://assets.digitalocean.com/articles/alligator/boo.svg "a title")
-->

</td><td>

![<center>Source: [ServeTheHome](https://www.servethehome.com/amd-epyc-7002-series-rome-delivers-a-knockout/3/)</center>](https://www.servethehome.com/wp-content/uploads/2019/08/AMD-EPYC-7002-SKU-List-and-Value-Comparison-Full.jpg)

</td></tr></table></center>

### Processors - Ryzen
These would both have performed admirably, but the 24 lane ceiling was a dead on arrival sign for me.
<center><table><tr><th>

[AMD Ryzen 3950X](https://www.amd.com/en/products/cpu/amd-ryzen-9-3950x)<br>

</th><th>

[AMD Ryzen 5950X](https://www.amd.com/en/products/cpu/amd-ryzen-9-5950x)<br>

</th></tr><tr><td width="50%">

<img src="https://cdn.mos.cms.futurecdn.net/Li9d69c8ZRvRNr9gRKBLjN.jpg"/>

<!--
![Source:](https://cdn.mos.cms.futurecdn.net/Li9d69c8ZRvRNr9gRKBLjN.jpg)
-->

</td><td width="50%">

<img src="https://static.tweaktown.com/news/7/5/75591_03_amds-new-ryzen-9-5950x-16-core-32-thread-at-nearly-5ghz-for-799_full.jpg" />

<!--
![Source: ](https://static.tweaktown.com/news/7/5/75591_03_amds-new-ryzen-9-5950x-16-core-32-thread-at-nearly-5ghz-for-799_full.jpg)
-->

</td></tr></table></center>

### Motherboards - EPYC
I evaluated 3 options, with the microATX being a far 3rd, since it was a little more limited. The ROMED8-2T and the HX S8030 were both readily available, so I started comparing them. They were very similar in what they offered on the surface, but the ASRock option won out due to having more fan connections, being available when I was ready, and having a few little details that I liked more. Honestly, I think I would have fared well with either option. 
<table><tr><th> 

[ASRock Rack ROMED8-2T](https://www.asrockrack.com/general/productdetail.asp?Model=ROMED8-2T#Specifications "ASRock Rack ROMED8-2T")

</th><th>

[Tyan Tomcat HX S8030](https://www.tyan.com/Motherboards_S8030_S8030GM4NE-2T "Tyan Tomcat HX S8030 (S8030GM4NE-2T)")

</th><th>

[ASRock Rack ROMED6U-2L2T](https://www.asrockrack.com/general/productdetail.asp?Model=ROMED6U-2L2T#Specifications)

</th></tr><tr><td width="33.3%"><center>

![Source:Prowess Computing](https://www.asrockrack.com/photo/ROMED8-2TBCM-1(L).jpg)
<!--
<img src="https://www.asrockrack.com/photo/ROMED8-2T-1(L).jpg" style="width: 400px; height: 300px; object-fit: fill; transform: rotateZ(90deg);" />
-->

</td><td width="33.3%"><center>

[![Source: ](https://www.tyan.com/images/systemboards/S8030.jpg)](https://www.tyan.com/Motherboards_S8030_S8030GM4NE-2T)


</td><td width="33.3%"><center>

[![Source: Prowess Computing](https://www.asrockrack.com/photo/ROMED6U-2L2T-1(L).jpg)](https://www.asrockrack.com/general/productdetail.asp?Model=ROMED6U-2L2T#Specifications)

</td></tr></table>

### Cooling Options
The CPU cooler was an easy decision, since the NH-U9 was highly regarded, and on sale. I am sure the U12S/U14S would have performed admirably as well, but they seemed a little "too" big even for the 4U enclosure.
 
<table><tr><th>

![Source: Noctua](https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u9_tr4_sp3_3_4.jpg)

</th><th>

![Source: Noctua](https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u12s_tr4_sp3_3_2.jpg)

</th><th>

![Source: Noctua](https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_3_3.jpg)

</th></tr><tr><td width="33.3%"><center>

[Noctua NH-U9 TR4-SP3](https://noctua.at/en/nh-u9-tr4-sp3) <br> L 4.72-in x H 4.9-in x W 3.74-in

</td><td width="33.3%"><center>

[Noctua NH-U12S TR4-SP3](https://noctua.at/en/nh-u12s-tr4-sp3) <br> L 2.80-in x H 6.2-in x W 4.90-in

</td><td width="33.3%"><center>

[Noctua NH-U14S TR4-SP3](https://noctua.at/en/nh-u14s-tr4-sp3) <br> L 3.07-in x H 6.5-in x W 5.90-in<br>
</td></tr></table>

### RAM Options

This was not too hard a decision, since the 
### Boot Drives

### Additional Storage

### PCIe Options

This was a subject that pushed hard on me to lean on EPYC, since the Ryzen processor would be taxed after a single x16 slot is used, I wanted at a minimum 2-3. A Threadripper CPU would have been plenty with it's 60 lanes, but the cost and TDP wattage was for the most part double for what I wanted. The ROMED8-2T has 7, well 6 if we look at this honestly, but that is more than enough for what I foresee my needs in the next 5-10 years being.

<center>

![Source: https://ptm2.cc.utu.fi/Pictures/Computers/Technics/](https://ptm2.cc.utu.fi/Pictures/Computers/Technics/PCB_size.JPG)

</center>

The motherboard is 9.6" deep, but the case allows about 10.6" deep cards to fit in the slots. 
 
<table>
<tr>
<th rowspan="2&quot;">PCI Card Type</th>
<th colspan="2">Dimensions height × length, maximum</th></tr>
<tr>
<th>(mm)</th>
<th>(in)</th></tr>
<tr>
<td><center>Full-Length</td>
<td><center>111.15 × 312.00</td>
<td><center>4.376 × 12.283</td>
</tr>
<tr>
<td><center>Half-Length</td>
<td><center>111.15 × 167.65</td>
<td><center>4.376 × 6.600</td>
</tr>
<tr>
<td><center>Low-Profile/Slim</td>
<td><center><span style="visibility:hidden;color:transparent;">0</span>68.90 × 167.65</td>
<td><center>2.731 × 6.600</td>
</tr></table>

[ASRock Hyper Quad M.2 Card](https://www.asrock.com/mb/spec/product.asp?Model=HYPER%20QUAD%20M.2%20CARD#Specification) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
L 9.6-in x H 4.4-in<br>

I wanted to have all my virtual machines and containers stored in a pool of Gen 4.0 SSDs, so this card needed to be part of any system I built. I opted for the ASRock version, since the motherboard will be of the same brand... but at the time of publishing I can't seem to find one in stock.

<table><tr><td width="50%">
<center>

![Source: ASRock](https://www.asrock.com/mb/photo/HYPER%20QUAD%20M.2%20CARD(L3).png)

</td><td width="50%">
<center>

![Source: ASRock](https://www.asrock.com/mb/photo/HYPER%20QUAD%20M.2%20CARD(L2).png)

</td></tr></table>

So instead, I found that I could source an MSI M.2 Xpander-AERO Gen4 for about $55 shipped. Unfortunately, while it is very short, it has a huge heatsink and fan. The card will do for now, but in the future will likely have to remove it to use the other x16 it covers. I could also remove the fan, and change the bracket to a single slot. The other option could be to get some small NVME coolers, and run it without the fan and cooler at all. The future will tell.

<table><tr><td width="50%"><center>

![Source: Serve The Home](https://www.servethehome.com/wp-content/uploads/2019/12/MSI-Creator-TRX40-M.2-Expander-Aero.jpg)


</td><td width="50%"><center>

![Source: Serve The Home](https://www.servethehome.com/wp-content/uploads/2019/12/MSI-Creator-TRX40-M.2-Expander-Aero-Open.jpg)

</td></tr></table>

<table><tr><td><center>

![Source: MSI](https://storage-asset.msi.com/event/mb/2019/AmdTrx40/images/m2_xpander1.png)

</td></tr></table>

[SAPPHIRE PULSE Radeon RX 580](https://www.sapphiretech.com/en/consumer/pulse-rx-580-8g-g5)

L 9.1-in x H 4.9-in x W 1.6-in<br>

This card was a default choice, as I had it in my 2009 Mac Pro, which was facing decommissioning thanks to the homelab reorg of 2020. Worry not dear reader, it is still on display, and is sometimes used for some lab training. 

<table><tr><td width="50%"><center>

![Source: Newegg](https://c1.neweggimages.com/ProductImageCompressAll1280/14-202-309-V02.jpg)

</td><td width="50%"><center>

![Source:Newegg](https://c1.neweggimages.com/ProductImageCompressAll1280/14-202-309-V04.jpg)

</td></tr></table>

The double slot M.2 card was causing an issue that I had planned for the video card to cause, which was the cover the 2nd PCIE slot since it was inactive. I did not see any single slot AMD cards that were worth my time, as they were older, but the single slot NVIDIA options were plenty in the Quadro world. Unfortunately, they all had the Pascal family NVENC engine, which does not support B Frames. I wanted this card for the encoding engine, so I could offload that work from the CPU, and if I was going to spend money on a new card I wanted a little future proofing. My Mac mini has been doing a fine job with encoding, since it has the i7, but I want to hardware encode with the server. I will take advantage of the RX580 for the time being, but will have an eye out for a deal on an NVIDIA card. Unfortunately, the consumer options are all double slotted, so it would be a temporary fix. The GeForce GTX 1650 Super would fill the role nicely, but they are hard to find at reasonable prices.

[NVIDIA Video Encode/Decode GPU Support Matrix](https://developer.nvidia.com/video-encode-decode-gpu-support-matrix)<br>

<table>
  <tr>
    <th>Board</th>
    <th>Chip</th>
    <th>Family</th>
    <th>NVENC Gen</th>
    <th>Misc</th>
  </tr>
  <tr>
    <td>GeForce GTX 1650 Super</td>
    <td><center>TU116</td>
    <td><center>Turing</td>
    <td><center>7th Gen</td>
    <td>4GB GDDR6 1280-CUDA 100W</td>
  </tr>
  <tr>
    <td>Quadro RTX 4000</td>
    <td><center>TU104</td>
    <td><center>Turing</td>
    <td><center>7th Gen</td>
    <td>8GB GDDR6 2304-CUDA 160W</td>
  </tr>
</table>

[Internal PCIe (four SFF-8654 4x 38pin) to PCI Express x16 Bifurcation Riser Card](http://www.ioi.com.tw/products/proddetail.aspx?CatID=106&DeviceID=3050&HostID=2108&ProdID=1060249)<br>

### Chassis Options
I knew I wanted either a 3U or a 4U rack mount chassis, due to the height requirements of the cards, and to have enough space for proper cooling. I also wanted something not so much short depth, around mid-depth, as the 25+ inch cases were simply too big. The iStarUSA M-4160-ATX was perfect, expensive and unavailable, but perfect. The case looked good, the drive cages seemed functional, and the 16 drives were about what I thought I would grow into over 5-10 years. This was the case that I would compare all other cases to, none really came close, except the Norco RPC-450TH. Closeness is relative here...

[iStarUSA M-4160-ATX [*UNAVAILABLE*]](http://www.istarusa.com/en/istarusa/products.php?model=M-4160-ATX)

L 22.83-in x H 6.92-in x W 19.02-in<br>

<table><tr><td width="50%">
<center>

![Source: ](http://www.istarusa.com/images/products/large/M-4160-ATX_02.jpg)

</td><td width="50%">
<center>

![Source: ](http://www.istarusa.com/images/products/large/M-4160-ATX_08.jpg)

</td></tr></table>

[RPC-450TH 4U Rackmount Server Case](http://www.norcotek.com/product/rpc-450th/) L 21.60-in x H 7.00-in x W 19.00-in<br>

<table><tr><td width="33.3%">

![Source: [Newegg](https://www.newegg.com/black-norco-rpc-450th/p/N82E16811219037)](https://c1.neweggimages.com/ProductImageCompressAll1280/11-219-037-27.jpg)

</td><td width="33.3%">

![Source: [Newegg](https://www.newegg.com/black-norco-rpc-450th/p/N82E16811219037)](https://c1.neweggimages.com/ProductImageCompressAll1280/11-219-037-23.jpg)

</td><td width="33.3%">

![Source: [Newegg](https://www.newegg.com/black-norco-rpc-450th/p/N82E16811219037)](https://c1.neweggimages.com/ProductImageCompressAll1280/11-219-037-22.jpg)

</td></tr></table>

<!-- Old Pictures
![Source: ](http://www.norcotek.com/wp-content/uploads/2015/05/rpc450th_1.jpg)
![Source: ](http://www.norcotek.com/wp-content/uploads/2015/05/rpc450th_3.jpg)
![Source: ](http://www.norcotek.com/wp-content/uploads/2015/05/rpc450th_4.jpg)
-->

<table border="0" cellspacing="1" cellpadding="3">
		<tr class="td_firstline">
			<td class="product_detail_spec_title" width="200">
				Drive Bay
			</td>
			<td class="spec_description" width="500">
				Supports ten hot swappable 3.5″ drives, and three 5.25″drives
			</td>
		</tr>
		<tr class="td_secondline">
			<td class="product_detail_spec_title">
				Cooling Fan
			</td>
			<td class="spec_description">
				2 x 80mm HDD fans, 2 x 80mm optional rear fans
			</td>
		</tr>
		<tr class="td_firstline">
			<td class="product_detail_spec_title" width="200">
				Switch
			</td>
			<td class="spec_description" width="500">
				Power ON/OFF x 1, System reset x 1
			</td>
		</tr>
		<tr class="td_secondline">
			<td class="product_detail_spec_title">
				Indicator
			</td>
			<td class="spec_description">
				Power ON/OFF x 1, HDD x 1, NETWORK X 2
			</td>
		</tr>
		<tr class="td_firstline">
			<td class="product_detail_spec_title" width="200">
				Connector
			</td>
			<td class="spec_description" width="500">
				Two front USB ports
			</td>
		</tr>
		<tr class="td_secondline">
			<td class="product_detail_spec_title">
				Motherboard Compatibility
			</td>
			<td class="spec_description">
				Support CEB(12″x10.5″), ATX (12″x9.6″), Micro ATX (9.6″ x 9.6″), Mini-ITX (6.7″ x 6.7″) motherboard
			</td>
		</tr>
		<tr class="td_firstline">
			<td class="product_detail_spec_title" width="200">
				Power Supply Options
			</td>
			<td class="spec_description" width="500">
				&nbsp;Standard ATX power supply, mini redundant power supply (H x W 5.91 x 3.31 inch)
			</td>
		</tr>
		<tr class="td_secondline">
			<td class="product_detail_spec_title">
				Dimensions ( W x D x H )
			</td>
			<td class="spec_description">
				19″ x 21.6″ x 7″ (483mm x 550mm x 176mm)
			</td>
		</tr>
		<tr class="td_firstline">
			<td class="product_detail_spec_title" width="200">
				Packing
			</td>
			<td class="spec_description" width="500">
				Double boxes
			</td>
		</tr>
		<tr class="td_secondline">
			<td class="product_detail_spec_title">
				Weight (without hard drive)
			</td>
			<td class="spec_description">
				40 lb (NET) 43 lb (GROSS)
			</td>
		</tr>
		<tr class="td_firstline">
			<td class="product_detail_spec_title" width="200">
				Environment Temperature
			</td>
			<td class="spec_description" width="500">
				0/55 °C, 32/131 °F (Operating) -20/60 °C, -4/140 °F (Non-Operating)
			</td>
		</tr>
		<tr class="td_secondline">
			<td class="product_detail_spec_title">
				Relative Humidity
			</td>
			<td class="spec_description">
				5% to 95%,non-condensing
			</td>
		</tr>
		<tr class="td_firstline">
			<td class="product_detail_spec_title" width="200">
				Vibration (5-500Hz)
			</td>
			<td class="spec_description" width="500">
				1 Grms (Operating), 2 G (Non-Operating)
			</td>
		</tr>
		<tr class="td_secondline">
			<td class="product_detail_spec_title">
				Shock
			</td>
			<td class="spec_description">
				10 G(with 11ms duration, half sine wave) (Operating), 30 G (Non-Operating)
			</td>
		</tr>
</table>

[Norco RPC-4224](http://www.norcotek.com/product/rpc-4224/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
L 25.50-in x H 7.00-in x W 19.00-in<br>
[Norco RPC-450](http://www.norcotek.com/product/rpc-450/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
L 21.60-in x H 7.00-in x W 19.00-in<br>
[Norco RPC-450B](http://www.norcotek.com/product/rpc-450b/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
L 21.60-in x H 7.00-in x W 19.00-in<br>
[Norco RPC-470](http://www.norcotek.com/product/rpc-470/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
L 25.50-in x H 7.00-in x W 19.00-in<br>

### Chassis Accessories

[ICY DOCK 6 x 2.5 ExpressCage MB326SP-B]()<br>
![Source: ](https://images-na.ssl-images-amazon.com/images/I/41-9ZXTCOJL._AC_.jpg)
<!--
### Cabinet Options
[SmartRack 4U Low-Profile Vertical-Mount Server](https://www.tripplite.com/smartrack-4u-low-profile-vertical-mount-server-depth-wall-mount-rack-enclosure-cabinet~SRWF4U36)

<table><center><tr><td>

![Source: ](https://assets.tripplite.com/large-image/srwf4u36-front-l.jpg)

</td><td>

![Source: ](https://assets.tripplite.com/large-image/srwf4u36-other03-l.jpg)

</td></tr></table>

[Rackmount 6U Vertical Wall Mount Solid Door](https://www.rackmountsolutions.net/6u-vertical-wall-mount/#specs)

<table><center><tr><td>

![Source: ](https://cdn11.bigcommerce.com/s-mn92le88sf/images/stencil/500x659/products/9368/24897/VRS-4-30__52144.1493737951.jpg?c=2)

</td><td>

![Source: ](https://cdn11.bigcommerce.com/s-mn92le88sf/images/stencil/500x659/products/9803/24557/vertical-wall-mount-plexiglass-full-sp_3__41755__61167__65954.1493737990.jpg?c=2)

</td></tr></table>
-->
### Conclusions


<!--

[https://www.reddit.com/r/HomeServer/comments/g4crdu/amd\_ryzen\_9\_3950x\_with\_128gb\_ecc\_memory\_build/](https://www.reddit.com/r/HomeServer/comments/g4crdu/amd_ryzen_9_3950x_with_128gb_ecc_memory_build/)
[https://www.reddit.com/r/PleX/comments/cvv5gr/build\_help\_in\_the\_ryzen\_3950x\_world/](https://www.reddit.com/r/PleX/comments/cvv5gr/build_help_in_the_ryzen_3950x_world/)
[https://www.reddit.com/r/Amd/comments/cp049e/ryzen\_3950x\_vs\_epyc\_7282\_cheaper\_than\_the\_former/](https://www.reddit.com/r/Amd/comments/cp049e/ryzen_3950x_vs_epyc_7282_cheaper_than_the_former/)
[https://www.reddit.com/r/homelab/comments/ca86w7/ryzen\_9\_3900x3950x\_for\_vm\_server/](https://www.reddit.com/r/homelab/comments/ca86w7/ryzen_9_3900x3950x_for_vm_server/)

[http://www.ipcdirect.net/rpc-431-4u-rackmount-server-case-9-x-3-5-drive-bays/](http://www.ipcdirect.net/rpc-431-4u-rackmount-server-case-9-x-3-5-drive-bays/)
[https://www.ixsystems.com/blog/zfs-zil-and-slog-demystified/](https://www.ixsystems.com/blog/zfs-zil-and-slog-demystified/)
[https://www.ixsystems.com/community/resources/github-repository-for-freenas-scripts-including-disk-burnin.28/](https://www.ixsystems.com/community/resources/github-repository-for-freenas-scripts-including-disk-burnin.28/)
[https://www.ixsystems.com/community/resources/dont-be-afraid-to-be-sas-sy.48/](https://www.ixsystems.com/community/resources/dont-be-afraid-to-be-sas-sy.48/)
[https://www.ixsystems.com/community/threads/proper-power-supply-sizing-guidance.38811/](https://www.ixsystems.com/community/threads/proper-power-supply-sizing-guidance.38811/)
[https://www.ixsystems.com/community/threads/moving-away-from-synology-30tb-setup-rackmount-build-confirmation.69979/](https://www.ixsystems.com/community/threads/moving-away-from-synology-30tb-setup-rackmount-build-confirmation.69979/)

Arctic Accelero Xtreme IV GPU Cooler

[ Accelero Twin Turbo III](https://www.arctic.ac/en/Accelero-Twin-Turbo-III/DCACO-V820001-GBA01)
[Cockpit](https://cockpit-project.org)
[Uncaged Ergonomics Rise Up](https://uncagedergonomics.com/rise-up-electric-adjustable-height-standing-desk/)
[SilverStone FS305-12G](https://www.silverstonetek.com/product.php?pid=885&area=en)
[SilverStone FS305](https://www.silverstonetek.com/product.php?pid=605&bno=72&tb=32&area=en)
[SilverStone EXB01](https://www.silverstonetek.com/product.php?pid=786&bno=76&tb=33&area=en)


## AMD Ryzen 9 3950X Server Build 2020
<a href="https://pcpartpicker.com/list/7MFkYH">PCPartPicker Part List</a>
<table class="pcpp-part-list">
  <thead>
    <tr>
      <th>Type</th>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="pcpp-part-list-type">CPU</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/t7CFf7/amd-ryzen-9-3950x-35-ghz-16-core-processor-100-100000051wof">AMD Ryzen 9 3950X 3.5 GHz 16-Core Processor</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/t7CFf7/amd-ryzen-9-3950x-35-ghz-16-core-processor-100-100000051wof">$689.99 @ Amazon</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">CPU Cooler</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/4vzv6h/noctua-cpu-cooler-nhd15">Noctua NH-D15 82.5 CFM CPU Cooler</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/4vzv6h/noctua-cpu-cooler-nhd15">$109.99 @ B&H</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">Motherboard</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/pbvqqs/asrock-x570-taichi-atx-am4-motherboard-x570-taichi">ASRock X570 Taichi ATX AM4 Motherboard</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/pbvqqs/asrock-x570-taichi-atx-am4-motherboard-x570-taichi">$296.99 @ Newegg</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">Memory</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/rJkgXL/gskill-ripjaws-v-128-gb-4-x-32-gb-ddr4-3200-memory-f4-3200c16q-128gvk">G.Skill Ripjaws V 128 GB (4 x 32 GB) DDR4-3200 CL16 Memory</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/rJkgXL/gskill-ripjaws-v-128-gb-4-x-32-gb-ddr4-3200-memory-f4-3200c16q-128gvk">$469.99 @ Amazon</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">Storage</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/YvZzK8/intel-665p-1-tb-m2-2280-nvme-solid-state-drive-ssdpeknw010t9x1">Intel 665p 1 TB M.2-2280 NVME Solid State Drive</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/YvZzK8/intel-665p-1-tb-m2-2280-nvme-solid-state-drive-ssdpeknw010t9x1">$109.99 @ Newegg</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">Storage</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/hCTPxr/seagate-ironwolf-pro-6-tb-35-7200rpm-internal-hard-drive-st6000ne0023">Seagate IronWolf Pro 6 TB 3.5" 7200RPM Internal Hard Drive</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/hCTPxr/seagate-ironwolf-pro-6-tb-35-7200rpm-internal-hard-drive-st6000ne0023">$199.99 @ Adorama</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">Storage</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/YkLwrH/seagate-exos-x16-16-tb-35-7200rpm-internal-hard-drive-st16000nm003g">Seagate Exos X16 16 TB 3.5" 7200RPM Internal Hard Drive</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/YkLwrH/seagate-exos-x16-16-tb-35-7200rpm-internal-hard-drive-st16000nm003g">$522.00 @ Amazon</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">Video Card</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/y2DzK8/sapphire-radeon-rx-580-8gb-pulse-video-card-11265-05">Sapphire Radeon RX 580 8 GB PULSE Video Card</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/y2DzK8/sapphire-radeon-rx-580-8gb-pulse-video-card-11265-05">$189.99 @ Newegg</a>
      </td>
    </tr>
    <tr>
      <td class="pcpp-part-list-type">Power Supply</td>
      <td class="pcpp-part-list-item"><a href="https://pcpartpicker.com/product/xfvZxr/evga-power-supply-220t20850x1">EVGA SuperNOVA T2 850 W 80+ Titanium Certified Fully Modular ATX Power Supply</a></td>
      <td class="pcpp-part-list-price">
        <a href="https://pcpartpicker.com/product/xfvZxr/evga-power-supply-220t20850x1">$302.00 @ Amazon</a>
      </td>
    </tr>
    <tr>
      <td></td>
      <td class="pcpp-part-list-price-note">Prices include shipping, taxes, rebates, and discounts</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="pcpp-part-list-total">Total</td>
      <td class="pcpp-part-list-total-price">$2890.93</td>
    </tr>
    <tr>
      <td></td>
      <td class="pcpp-part-list-price-note">*Lowest price parts chosen from parametric criteria</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td class="pcpp-part-list-price-note">Generated by <a href="https://pcpartpicker.com">PCPartPicker</a> 2020-07-25 22:26 EDT-0400</td>
      <td></td>
    </tr>
  </tbody>
</table>
-->
<br><br><br>

<!-- Original Post Below -->

Welcome to [Minima Reboot](https://github.com/aterenin/minima-reboot), a Bootstrap-based rewrite of [Minima](https://github.com/jekyll/minima), the base Jekyll theme. Check out the responsive navigation menu and footer by changing your browser's width. This is a post in the `_posts` directory. You can view Minima Reboot's source on [GitHub](https://github.com/aterenin/minima-reboot). Minima Reboot inherits Jekyll's support for code highlighting, as shown below.

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [GitHub repository](https://github.com/aterenin/minima-reboot) for more info.
