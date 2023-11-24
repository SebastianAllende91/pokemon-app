import Image from "next/image";
import NextLink from "next/link";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="icono de la aplicacion"
        width={70}
        height={70}
      />
      <NextLink href={"/"}>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href={"/favorites"}>
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};

export default Navbar;
