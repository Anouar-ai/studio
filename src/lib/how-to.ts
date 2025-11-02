
export type HowToStep = {
    title: string;
    description: string;
};

export type HowToContent = {
    id: string;
    title: string;
    description: string;
    keywords: string[];
    steps: HowToStep[];
};

export const howToArticles: HowToContent[] = [
    {
        id: 'iphone',
        title: 'How to Install and Use IPTV on iPhone',
        description: 'A complete guide to setting up our IPTV service on your iPhone. Start streaming your favorite channels on the go with our simple step-by-step instructions.',
        keywords: ['IPTV on iPhone', 'iOS IPTV', 'iPhone IPTV setup', 'streaming on iPhone'],
        steps: [
            {
                title: 'Step 1: Get an IPTV Subscription',
                description: "First, you need an active IPTV subscription from us. If you don't have one, visit our subscription page and choose a plan that suits you. You will receive your M3U playlist link via email."
            },
            {
                title: 'Step 2: Download an IPTV Player from the App Store',
                description: 'Open the App Store on your iPhone and search for an IPTV player. We recommend apps like "GSE Smart IPTV" or "IPTV Smarters Pro". Download and install your preferred app.'
            },
            {
                title: 'Step 3: Open the IPTV App and Add Playlist',
                description: 'Launch the IPTV player app. Look for an option to "Add Playlist" or a "+" icon. You will generally be given the option to add a playlist from a URL.'
            },
            {
                title: 'Step 4: Enter Your M3U Playlist URL',
                description: 'Select the option to add a playlist from a URL. Give your playlist a name (e.g., "My IPTV") and paste the M3U link that you received from us in your email into the URL field. '
            },
            {
                title: 'Step 5: Load and Watch Channels',
                description: 'Save the playlist. The app will begin to load all the channels, movies, and series included in your subscription. Once loaded, you can browse through the categories and tap on any channel to start watching.'
            }
        ]
    },
    {
        id: 'ipad',
        title: 'How to Set Up IPTV on iPad',
        description: 'Follow this guide to easily install and configure IPTV on your iPad. Enjoy thousands of channels on a larger screen with our premium service.',
        keywords: ['IPTV on iPad', 'iPad IPTV setup', 'iOS streaming', 'watch IPTV on iPad'],
        steps: [
            {
                title: 'Step 1: Obtain Your IPTV Subscription',
                description: "To begin, you need an IPTV subscription from us. After purchase, you'll get an M3U playlist link in your email, which is key for the setup."
            },
            {
                title: 'Step 2: Install an IPTV Player from the App Store',
                description: 'On your iPad, open the App Store and look for a compatible IPTV player. Apps like "GSE Smart IPTV" or "IPTV Smarters Pro" are excellent choices. Install the one you prefer.'
            },
            {
                title: 'Step 3: Configure the Player with Your Playlist',
                description: 'Open the installed app. Navigate to the section for adding a new playlist. This is usually marked with a "+" or an "Add Playlist" button.'
            },
            {
                title: 'Step 4: Add Your M3U Link',
                description: 'Choose to add the playlist via URL. In the provided fields, enter a name for your playlist and paste your M3U link from the subscription email.'
            },
            {
                title: 'Step 5: Start Streaming',
                description: 'Save your settings. The app will now load the channels. You can navigate through the channel list, find what you want to watch, and tap to play.'
            }
        ]
    },
    {
        id: 'macos',
        title: 'How to Watch IPTV on macOS',
        description: 'This guide shows you how to set up and watch IPTV on your MacBook or iMac using the popular and free VLC Media Player.',
        keywords: ['IPTV on macOS', 'MacBook IPTV', 'VLC for IPTV', 'macOS streaming'],
        steps: [
            {
                title: 'Step 1: Install VLC Media Player',
                description: "If you don't already have it, download VLC from the official VideoLAN website. Open the downloaded .dmg file and drag the VLC application to your Applications folder."
            },
            {
                title: 'Step 2: Open Network Stream in VLC',
                description: 'Launch VLC. From the menu bar at the top of the screen, click "File", then select "Open Network..." (or press Command+N).'
            },
            {
                title: 'Step 3: Paste Your M3U URL',
                description: 'A new window will open. Paste the M3U playlist URL from your subscription email into the URL field.'
            },
            {
                title: 'Step 4: Open the Stream',
                description: 'Click the "Open" button. VLC will start processing the playlist.'
            },
            {
                title: 'Step 5: View Your Playlist and Watch',
                description: 'To see the list of all available channels, go to "View" in the menu bar and select "Playlist" (or press Command+Option+P). Double-click any channel to begin streaming.'
            }
        ]
    },
    {
        id: 'android',
        title: 'How to Install IPTV on Android Devices',
        description: 'Set up IPTV on your Android phone or tablet in a few easy steps. Access your favorite content from anywhere with our guide.',
        keywords: ['IPTV on Android', 'Android IPTV player', 'streaming on Android', 'IPTV Smarters'],
        steps: [
            {
                title: 'Step 1: Download an IPTV Player',
                description: 'Open the Google Play Store and search for an IPTV app. "IPTV Smarters Pro" or "TiviMate" are highly recommended. Install your chosen app.'
            },
            {
                title: 'Step 2: Get Your Subscription Details',
                description: "You'll need the M3U URL or Xtream Codes API details from your subscription confirmation email."
            },
            {
                title: 'Step 3: Add Your Playlist to the App',
                description: 'Open the IPTV app. Select the option to "Add User" or "Add Playlist". Choose to log in with Xtream Codes API or M3U URL.'
            },
            {
                title: 'Step 4: Enter Your Credentials',
                description: 'Fill in the required fields: a playlist name, your username, your password, and the server URL (for Xtream Codes), or simply the M3U link. All this information is in your email.'
            },
            {
                title: 'Step 5: Enjoy Streaming',
                description: 'Once the details are submitted, the app will load your channels and VOD content. You can now browse and watch anything from your subscription.'
            }
        ]
    },
    {
        id: 'windows',
        title: 'How to Use IPTV on Windows PC',
        description: 'Learn how to stream IPTV channels on your Windows computer using VLC Media Player or a dedicated IPTV player.',
        keywords: ['IPTV on Windows', 'PC IPTV', 'VLC on Windows', 'Windows IPTV player'],
        steps: [
            {
                title: 'Step 1: Install an IPTV Player',
                description: 'For the simplest setup, download and install VLC Media Player from its official website. Alternatively, you can download an app like "MyIPTV Player" from the Microsoft Store.'
            },
            {
                title: 'Step 2: Using VLC Media Player',
                description: 'Open VLC. Click on "Media" in the top menu, then "Open Network Stream...". Paste your M3U URL into the network URL box and click "Play". To see the channel list, click "View" -> "Playlist".'
            },
            {
                title: 'Step 3: Using MyIPTV Player',
                description: 'Launch MyIPTV Player. Go to Settings -> "Add new playlist and EPG source". In the "Remote channel list" section, give your playlist a name and paste your M3U URL. Then click "Add remote list".'
            },
            {
                title: 'Step 4: Select and Watch',
                description: 'The app or player will load the channels. Simply select a channel from the list to start watching on your PC.'
            }
        ]
    },
    {
        id: 'smart-tv',
        title: 'How to Set Up IPTV on a Smart TV (Samsung/LG)',
        description: 'This guide shows you how to install and configure our IPTV service on your Samsung or LG Smart TV using popular applications.',
        keywords: ['IPTV on Smart TV', 'Samsung IPTV', 'LG IPTV', 'Smart TV IPTV app'],
        steps: [
            {
                title: 'Step 1: Find an IPTV App on Your TV Store',
                description: 'Turn on your Smart TV and navigate to its app store (Samsung Apps or LG Content Store). Search for an IPTV app. Common choices include "Smart IPTV" or "IBO Player". Note that some of these apps may require a one-time activation fee.'
            },
            {
                title: 'Step 2: Install the App and Get Your MAC Address',
                description: 'Install your chosen app. When you open it for the first time, it will display a "MAC Address" or "Device ID" on the screen. Write this down.'
            },
            {
                title: 'Step 3: Visit the App\'s Website',
                description: 'On a computer or phone, go to the website for the app you just installed (e.g., siptv.app for Smart IPTV). Find the section for playlist management, usually labeled "My List" or "Playlist Upload".'
            },
            {
                title: 'Step 4: Upload Your Playlist',
                description: 'Enter the MAC address of your TV and your M3U playlist URL from your subscription email. Save the settings and upload the playlist.'
            },
            {
                title: 'Step 5: Restart the App on Your TV',
                description: 'Close and reopen the app on your Smart TV. It should now load the channel list, and you can begin watching.'
            }
        ]
    },
    {
        id: 'fire-tv',
        title: 'How to Install IPTV on Amazon Fire TV Stick',
        description: 'Follow these simple steps to set up our IPTV service on your Amazon Fire TV or Firestick for a seamless streaming experience.',
        keywords: ['IPTV on Firestick', 'Fire TV IPTV', 'Amazon Fire TV setup', 'Smarters on Firestick'],
        steps: [
            {
                title: 'Step 1: Enable Apps from Unknown Sources',
                description: 'On your Firestick, go to Settings > My Fire TV > Developer Options. Turn on "Apps from Unknown Sources".'
            },
            {
                title: 'Step 2: Install the Downloader App',
                description: 'From the Firestick home screen, go to "Find" and search for the "Downloader" app. Install it.'
            },
            {
                title: 'Step 3: Download Your IPTV Player',
                description: 'Open the Downloader app. In the URL field, enter the direct download link for an IPTV player APK, such as IPTV Smarters Pro. You can find these links with a quick web search for "IPTV Smarters APK".'
            },
            {
                title: 'Step 4: Install and Configure the IPTV Player',
                description: 'Once downloaded, Downloader will prompt you to install the app. After installation, open your new IPTV app. Choose to log in with Xtream Codes API or an M3U URL and enter the credentials provided in your subscription email.'
            },
            {
                title: 'Step 5: Start Watching',
                description: 'The app will load your subscription. You can now access all channels, movies, and series directly on your Fire TV.'
            }
        ]
    },
    {
        id: 'apple-tv',
        title: 'How to Use IPTV on Apple TV',
        description: 'Learn how to easily set up and stream our IPTV service on your Apple TV for a premium viewing experience on the big screen.',
        keywords: ['IPTV on Apple TV', 'tvOS IPTV', 'Apple TV streaming', 'iPlayTV'],
        steps: [
            {
                title: 'Step 1: Download an IPTV App from the App Store',
                description: 'On your Apple TV, open the App Store. Search for and install an IPTV application. Popular choices include "iPlayTV" or "GSE Smart IPTV".'
            },
            {
                title: 'Step 2: Add Your Playlist',
                description: 'Open the app you just installed. Navigate to the section to add a new playlist, usually indicated by a "+" icon.'
            },
            {
                title: 'Step 3: Choose Playlist Method',
                description: 'You will have options like "Add from URL" or "Xtream Codes API". Select the method that corresponds to the details you received in your subscription email.'
            },
            {
                title: 'Step 4: Enter Your Subscription Details',
                description: 'Carefully enter your M3U playlist URL or your Xtream Codes credentials (username, password, and server URL). Give the playlist a name.'
            },
            {
                title: 'Step 5: Load and Enjoy',
                description: 'Save the playlist. The app will download and organize the channels. You can now browse and enjoy streaming on your Apple TV.'
            }
        ]
    },
    {
        id: 'roku',
        title: 'How to Watch IPTV on Roku',
        description: 'Roku devices do not natively support IPTV apps, but you can still stream using screen mirroring from another device. This guide shows you how.',
        keywords: ['IPTV on Roku', 'Roku IPTV setup', 'stream to Roku', 'Roku screen mirroring'],
        steps: [
            {
                title: 'Step 1: Understand Roku\'s Limitations',
                description: 'Roku does not have native support for M3U-based IPTV players in its Channel Store. The most reliable method is to cast or screen mirror from another device (like an Android phone or Windows PC).'
            },
            {
                title: 'Step 2: Set Up IPTV on a Casting Device',
                description: 'First, follow our guide to set up IPTV on your Android phone or Windows PC. Make sure you have the channels playing correctly on that device.'
            },
            {
                title: 'Step 3: Enable Screen Mirroring on Roku',
                description: 'On your Roku, go to Settings > System > Screen Mirroring. Ensure "Screen mirroring mode" is set to "Prompt" or "Always allow".'
            },
            {
                title: 'Step 4: Start Casting from Your Device',
                description: 'On your Android device, pull down the quick settings panel and find the "Smart View", "Cast", "Screen Mirroring", or similar option. On Windows, press Windows Key + K. Select your Roku device from the list of available devices.'
            },
            {
                title: 'Step 5: Play IPTV Content',
                description: 'Once your device\'s screen is mirrored on your TV, open your IPTV player app and play any channel. The video and audio will now be showing on your TV through the Roku.'
            }
        ]
    },
    {
        id: 'mag',
        title: 'How to Configure IPTV on a MAG Box',
        description: 'This guide provides instructions for setting up your IPTV subscription on a MAG device using the built-in portal system.',
        keywords: ['IPTV on MAG', 'MAG box setup', 'Infomir MAG', 'IPTV portal'],
        steps: [
            {
                title: 'Step 1: Find Your MAC Address',
                description: 'Turn on your MAG box. On the main screen or in the settings, find the MAC address of your device. It usually starts with 00:1A:79. Provide this MAC address to us when you order, or send it to support.'
            },
            {
                title: 'Step 2: Configure Network Settings',
                description: 'From the main menu, go to Settings > System Settings > Servers > Portals.'
            },
            {
                title: 'Step 3: Enter the Portal URL',
                description: 'In the "Portal 1 URL" field, enter the specific portal address that was sent to you in your subscription email after you provided your MAC address.'
            },
            {
                title: 'Step 4: Save and Reboot',
                description: 'Press the "OK" button to save the settings. You will be prompted to reboot the device. Select "OK" to reboot.'
            },
            {
                title: 'Step 5: Load the Portal',
                description: 'After rebooting, the MAG box will automatically start loading the IPTV portal. Once loaded, you will see the channel list and can start watching.'
            }
        ]
    }
];
