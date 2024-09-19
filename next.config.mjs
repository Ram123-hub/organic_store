const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'placehold.co',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  