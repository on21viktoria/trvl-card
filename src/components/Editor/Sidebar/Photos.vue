<template>
  <div class="photo-div">
    <p class="tool-title">Fotos</p>
    <p class="tool-title subtitle">Bildauswahl</p>

  <img id="emptyImage" src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2Fleer_mit_strich.png?alt=media&token=22e13ea0-be57-4572-ae3e-9e4be3a58d33" width="30%"
      @click="changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2Fleer.png?alt=media&token=22d8b56e-e1da-4bee-8a77-b2b4a52a7747')"
    />

    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-berlin variant="info" 
            >Berlin</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-berlin" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FAmpel_Philippe-Oursel_72dpi.jpg?alt=media&token=d5b695f2-fa8f-40e3-bee2-f25207dc58a3" width="100%"
              @click="changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FAmpel_Philippe-Oursel_72dpi.jpg?alt=media&token=d5b695f2-fa8f-40e3-bee2-f25207dc58a3')"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerliner-Mauer_Mateo-Krossler_72dpi.jpg?alt=media&token=3a786bd1-e450-4737-8f90-06ccc9d551e9" width="100%"
              @click="changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerliner-Mauer_Mateo-Krossler_72dpi.jpg?alt=media&token=3a786bd1-e450-4737-8f90-06ccc9d551e9')"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBrandenburger-Tor_Hakon-Sataoen_72dpi.jpg?alt=media&token=edf64a7e-e55c-4cf2-9c33-87317939a580"
              @click="changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBrandenburger-Tor_Hakon-Sataoen_72dpi.jpg?alt=media&token=edf64a7e-e55c-4cf2-9c33-87317939a580')" width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FCheckpoint-Charlie_Santiago-flores_72dpi.jpg?alt=media&token=f45db05a-9212-4182-8b85-bf3f6223b819"
              @click="changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FCheckpoint-Charlie_Santiago-flores_72dpi.jpg?alt=media&token=f45db05a-9212-4182-8b85-bf3f6223b819')" width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FFernsehturm_Camilla-Bundgaard_72dpi.jpg?alt=media&token=86897b75-fcde-413f-b130-4f02996dcd86"
              @click="changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FFernsehturm_Camilla-Bundgaard_72dpi.jpg?alt=media&token=86897b75-fcde-413f-b130-4f02996dcd86')" width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuseumsinsel_Christian-Ladewig_72dpi.jpg?alt=media&token=537939ac-edca-4d84-8c64-6ec4f2af96f5"
              @click="changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuseumsinsel_Christian-Ladewig_72dpi.jpg?alt=media&token=537939ac-edca-4d84-8c64-6ec4f2af96f5')" width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FOlympiastadion_Samuel-Svec_72dpi.jpg?alt=media&token=b0616a2a-fe00-4817-b115-b66caa9964d7"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FOlympiastadion_Samuel-Svec_72dpi.jpg?alt=media&token=b0616a2a-fe00-4817-b115-b66caa9964d7')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FReichstag_Fionn-Grosseh_72dpi.jpg?alt=media&token=94bdc059-6653-497d-be9a-f84410b76dd8"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FReichstag_Fionn-Grosseh_72dpi.jpg?alt=media&token=94bdc059-6653-497d-be9a-f84410b76dd8')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStadtansicht2_Stefan-Widua_72dpi.jpg?alt=media&token=1bf6d06f-122d-4ee2-91ed-d12361174173"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStadtansicht2_Stefan-Widua_72dpi.jpg?alt=media&token=1bf6d06f-122d-4ee2-91ed-d12361174173')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStadtansicht_Florian-Wehde_72dpi.jpg?alt=media&token=6d3edc00-9447-4cad-839d-072fecc59dc3"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStadtansicht_Florian-Wehde_72dpi.jpg?alt=media&token=6d3edc00-9447-4cad-839d-072fecc59dc3')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FU-Bahn_Soroush-Karimi_72dpi.jpg?alt=media&token=915223e9-638a-4153-9ad0-f39ad72cefc4"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FU-Bahn_Soroush-Karimi_72dpi.jpg?alt=media&token=915223e9-638a-4153-9ad0-f39ad72cefc4')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-hamburg variant="info"
            >Hamburg</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-hamburg" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_43625091.jpeg?alt=media&token=453a2065-c77d-4012-b836-69e794915e41"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_43625091.jpeg?alt=media&token=453a2065-c77d-4012-b836-69e794915e41')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_57038016.jpeg?alt=media&token=74a49735-ea0b-4f1b-86bc-126c4f13741f"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_57038016.jpeg?alt=media&token=74a49735-ea0b-4f1b-86bc-126c4f13741f')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_128585799.jpeg?alt=media&token=154581d5-2691-4732-8bf5-70e67e438e58"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_128585799.jpeg?alt=media&token=154581d5-2691-4732-8bf5-70e67e438e58')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_139948950.jpeg?alt=media&token=411d7147-dad4-4942-9099-1734def257f1"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_139948950.jpeg?alt=media&token=411d7147-dad4-4942-9099-1734def257f1')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_152735034.jpeg?alt=media&token=30f66146-0222-407d-9175-730a8bf35eef"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_152735034.jpeg?alt=media&token=30f66146-0222-407d-9175-730a8bf35eef')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_316956027.jpeg?alt=media&token=62e11de1-7fd1-42b5-95ac-0c4a9776d4ff"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_316956027.jpeg?alt=media&token=62e11de1-7fd1-42b5-95ac-0c4a9776d4ff')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-heidelberg variant="info" id="buttonChange"
            >Heidelberg</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-heidelberg" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_172216125.jpeg?alt=media&token=63f13405-dea6-48dd-bc98-253687885c03"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_172216125.jpeg?alt=media&token=63f13405-dea6-48dd-bc98-253687885c03')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_282847215.jpeg?alt=media&token=850ea02b-5051-4862-b795-d330e7960501"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_282847215.jpeg?alt=media&token=850ea02b-5051-4862-b795-d330e7960501')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_287960169.jpeg?alt=media&token=f11c0781-a907-4a72-8411-902bb09c64bd"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_287960169.jpeg?alt=media&token=f11c0781-a907-4a72-8411-902bb09c64bdg')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_314522208.jpeg?alt=media&token=3ea64b3f-49d6-48a7-9971-26a64ad79028"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_314522208.jpeg?alt=media&token=3ea64b3f-49d6-48a7-9971-26a64ad79028')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-karlsruhe variant="info"
            >Karlsruhe</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-karlsruhe" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_107847681.jpeg?alt=media&token=025fe346-6a0c-41c5-bf58-e233dc4cb1ed"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_107847681.jpeg?alt=media&token=025fe346-6a0c-41c5-bf58-e233dc4cb1ed')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_201271229.jpeg?alt=media&token=89305492-9381-42fb-b346-4b5318c8a6db"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_201271229.jpeg?alt=media&token=89305492-9381-42fb-b346-4b5318c8a6db')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_395590535.jpeg?alt=media&token=fb23cd6d-fcb8-4e7a-863b-7afc14f7023e"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_395590535.jpeg?alt=media&token=fb23cd6d-fcb8-4e7a-863b-7afc14f7023e')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_489449318.jpeg?alt=media&token=6b53813a-85ec-400c-9a20-2c5d52b184f2"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_489449318.jpeg?alt=media&token=6b53813a-85ec-400c-9a20-2c5d52b184f2')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_97134923.jpeg?alt=media&token=1eb65c47-5910-428f-b8e9-143343f86fa1"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_97134923.jpeg?alt=media&token=1eb65c47-5910-428f-b8e9-143343f86fa1')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-koeln variant="info" id="buttonChange"
            >Köln</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-koeln" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_120809336.jpeg?alt=media&token=0cc2278d-f34c-4cad-b24a-6fd38fd3ff5d"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_120809336.jpeg?alt=media&token=0cc2278d-f34c-4cad-b24a-6fd38fd3ff5d')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_142173094.jpeg?alt=media&token=06b48d32-4099-4758-b93e-2806bf769293"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_142173094.jpeg?alt=media&token=06b48d32-4099-4758-b93e-2806bf769293')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_170192054.jpeg?alt=media&token=ba4a9726-bded-4a27-a4b7-01ec6cf5d64a"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_170192054.jpeg?alt=media&token=ba4a9726-bded-4a27-a4b7-01ec6cf5d64a')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_251826193.jpeg?alt=media&token=c7b25f0a-7872-49d5-a4b3-9a6a45388782"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_251826193.jpeg?alt=media&token=c7b25f0a-7872-49d5-a4b3-9a6a45388782')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_30192046.jpeg?alt=media&token=7b52cf49-cf30-4a9f-8003-6bbaffe80e0a"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_30192046.jpeg?alt=media&token=7b52cf49-cf30-4a9f-8003-6bbaffe80e0a')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-mannheim variant="info"
            >Mannheim</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-mannheim" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_116624575.jpeg?alt=media&token=de4da825-e920-4e55-8c37-7c8d3e41b241"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_116624575.jpeg?alt=media&token=de4da825-e920-4e55-8c37-7c8d3e41b241')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_280067788.jpeg?alt=media&token=8cf57c9e-351a-44e1-a482-a96937f507f4"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_280067788.jpeg?alt=media&token=8cf57c9e-351a-44e1-a482-a96937f507f4')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_307933513.jpeg?alt=media&token=ca708432-63e0-4617-994f-2344bf752df6"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_307933513.jpeg?alt=media&token=ca708432-63e0-4617-994f-2344bf752df6')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_38408106.jpeg?alt=media&token=f56ac6c8-36e2-4d21-9ec9-a3a759dc631e"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_38408106.jpeg?alt=media&token=f56ac6c8-36e2-4d21-9ec9-a3a759dc631e')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-mosbach variant="info"
            >Mosbach</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-mosbach" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_206700603.jpeg?alt=media&token=72b0d82f-4650-42ed-9004-70e3246f3cbe"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_206700603.jpeg?alt=media&token=72b0d82f-4650-42ed-9004-70e3246f3cbe')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_315686175.jpeg?alt=media&token=29830bac-01e8-42ae-bc4a-6fd20754dc2c"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_315686175.jpeg?alt=media&token=29830bac-01e8-42ae-bc4a-6fd20754dc2c')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_463480456.jpeg?alt=media&token=0c962c0a-27d1-4b70-9e1d-1e4d462426fa"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_463480456.jpeg?alt=media&token=0c962c0a-27d1-4b70-9e1d-1e4d462426fa')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-muenchen variant="info"
            >München</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-muenchen" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_187067448.jpeg?alt=media&token=bbfc949f-fc9d-4524-b773-6055b4d2d309"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_187067448.jpeg?alt=media&token=bbfc949f-fc9d-4524-b773-6055b4d2d309')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_206386682.jpeg?alt=media&token=23dfba56-a9fd-4811-936a-c1a533f4b1fa"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_206386682.jpeg?alt=media&token=23dfba56-a9fd-4811-936a-c1a533f4b1fa')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_215825149.jpeg?alt=media&token=fec6579e-ee9f-4843-b05b-a294f3d24181"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_215825149.jpeg?alt=media&token=fec6579e-ee9f-4843-b05b-a294f3d24181')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_246832069.jpeg?alt=media&token=8b85acd3-9068-425d-8fb1-646fd4426da5g"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_246832069.jpeg?alt=media&token=8b85acd3-9068-425d-8fb1-646fd4426da5')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_49661244.jpeg?alt=media&token=58c3bbc9-6f46-4678-a4b1-a897b27c84ae"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_49661244.jpeg?alt=media&token=58c3bbc9-6f46-4678-a4b1-a897b27c84ae')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_70535031.jpeg?alt=media&token=7a9a9756-8b15-465a-8db5-63b2ae43d828"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_70535031.jpeg?alt=media&token=7a9a9756-8b15-465a-8db5-63b2ae43d828')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stuttgart variant="info"
            >Stuttgart</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-stuttgart" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_246456316.jpeg?alt=media&token=f50d6ad0-50b6-40a6-9cb9-6768451c5096"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_246456316.jpeg?alt=media&token=f50d6ad0-50b6-40a6-9cb9-6768451c5096')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_296612504.jpeg?alt=media&token=6d3be1a2-847b-46d3-9054-5f55c3aac90b"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_296612504.jpeg?alt=media&token=6d3be1a2-847b-46d3-9054-5f55c3aac90b')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_304557577.jpeg?alt=media&token=9aac1e4a-9704-42aa-b2d3-d5deb6819ba8"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_304557577.jpeg?alt=media&token=9aac1e4a-9704-42aa-b2d3-d5deb6819ba8')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_329362632.jpeg?alt=media&token=42f411ec-7179-4429-b3db-1626d266e549"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_329362632.jpeg?alt=media&token=42f411ec-7179-4429-b3db-1626d266e549')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_39472750.jpeg?alt=media&token=96bbfb24-736d-4c87-85b4-c1786d857860"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_39472750.jpeg?alt=media&token=96bbfb24-736d-4c87-85b4-c1786d857860')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-wuerzburg variant="info"
            >Würzburg</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-wuerzburg" role="tabpanel">
          <b-card-body>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_170627925.jpeg?alt=media&token=b7bdae03-2163-4f10-9c1c-26de461d023e"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_170627925.jpeg?alt=media&token=b7bdae03-2163-4f10-9c1c-26de461d023e')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_276622665.jpeg?alt=media&token=eb86cbda-4df4-45bf-a0ea-d09e31a3b601"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_276622665.jpeg?alt=media&token=eb86cbda-4df4-45bf-a0ea-d09e31a3b601')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_71827480.jpeg?alt=media&token=eefb3638-9e7c-4f78-8e97-9ca4a612c218"
              @click="
          changeBackgroundPicture('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_71827480.jpeg?alt=media&token=eefb3638-9e7c-4f78-8e97-9ca4a612c218')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Photos",
  methods: {
    changeBackgroundPicture(picture: string) {
      this.$store.dispatch("setPicture", picture);
    },
  },
});
</script>

<style scoped>
.photo-div {
  width: 100%;
  max-height: 800px;
  overflow: auto;
  margin-bottom: 20px;
}
.card-body {
  display: grid !important;
  grid-template-columns: 50% 50% !important;
  grid-template-rows: auto !important;
  column-gap: 10px !important;
  row-gap: 10px !important;
  padding: 25px 15px 25px 5px;
}

img:hover {
  opacity: 30%;
}

.tool-title {
  font-weight: bold;
  font-size: 18px;
  color: #ff4e00;
  margin-bottom: 8px;
  text-align: center;
}

.tool-title.subtitle {
  font-size: 16px;
}

.btn {
  background-color: lightGrey;
  color: black;
  font-weight: 600;
  border: none;
  width: 100%;
}

.btn:hover {
  background-color: #ff4e00;
}

.btn:focus {
  box-shadow: none;
}

.card {
  border: none;
  padding: 0;
  margin: 0;
}

#emptyImage {
  padding: 20px 0;
  display: flex;
  margin: auto;
}

</style>
